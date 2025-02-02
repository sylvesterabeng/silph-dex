import { gql } from '@apollo/client'
import client from './client'

const POKEDEX = gql`
  fragment Pokedex on pokemon_v2_pokemon {
    id
    types: pokemon_v2_pokemontypes {
      type: pokemon_v2_type {
        name
      }
    }
    abilities: pokemon_v2_pokemonabilities(distinct_on: ability_id) {
      ability: pokemon_v2_ability {
        abilityNames: pokemon_v2_abilitynames(
          where: { pokemon_v2_language: { name: { _eq: "en" } } }
        ) {
          name
        }
      }
    }
    specy: pokemon_v2_pokemonspecy {
      names: pokemon_v2_pokemonspeciesnames(
        where: { pokemon_v2_language: { name: { _eq: "en" } } }
      ) {
        name
      }
    }
    sprites: pokemon_v2_pokemonsprites {
      sprites(path: "other")
    }
  }
`

const POKEDEX_BY_GENERATION = gql`
  ${POKEDEX}

  query species($generation: Int) {
    pokedex: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: {
        pokemon_v2_pokemonmoves: {
          pokemon_v2_versiongroup: { generation_id: { _eq: $generation } }
        }
        id: { _lt: 10000 }
      }
    ) {
      ...Pokedex
    }
  }
`

const NATIONAL_POKEDEX = gql`
  ${POKEDEX}

  query species($generation: Int) {
    pokedex: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { id: { _lt: 10000 } }
    ) {
      ...Pokedex
    }
  }
`

export async function fetchPokedex(generation) {
  const { data } = await client.query({
    query: generation ? POKEDEX_BY_GENERATION : NATIONAL_POKEDEX,
    variables: { generation },
  })

  return data.pokedex
}
