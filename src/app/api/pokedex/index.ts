import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import { PokedexQuery } from '@generated/graphql'
import { convertToPokedex } from '@presenter'

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
})

const NUMBER_OF_POKEMONS_TO_LOAD =
  process.env.NUMBER_OF_POKEMONS_TO_LOAD || 10000

const NATIONAL_POKEDEX = gql`
  query pokedex {
    pokedex: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { id: { _lte: ${NUMBER_OF_POKEMONS_TO_LOAD} } }
    ) {
      id
      key: name
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat_id
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities(distinct_on: ability_id) {
        ability: pokemon_v2_ability {
          abilityNames: pokemon_v2_abilitynames {
            name
            language_id
          }
        }
      }
      specy: pokemon_v2_pokemonspecy {
        names: pokemon_v2_pokemonspeciesnames {
          name
          language_id
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites(path: "other")
      }
    }
  }
`

export const fetchPokedex = async () => {
  const { data } = await client.query<PokedexQuery>({
    query: NATIONAL_POKEDEX,
  })

  return convertToPokedex(data.pokedex)
}
