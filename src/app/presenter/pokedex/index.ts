import { PokedexQuery } from '@generated/graphql'
import { Pokedex, PokemonSummary } from '@type'

const index = (pokedex: PokedexQuery['pokedex']): Pokedex => {
  return pokedex.map((pokemon): PokemonSummary => {
    return {
      id: pokemon.id,
      name: pokemon.specy?.names[0].name,
      types: pokemon.types.map((t) => t.type?.name || ''),
      abilities: pokemon.abilities.map((a) => {
        return a.ability?.abilityNames[0].name || ''
      }),
      stats: '',
      sprite: pokemon.sprites[0].sprites['official-artwork'].front_default,
    }
  })
}

export default index
