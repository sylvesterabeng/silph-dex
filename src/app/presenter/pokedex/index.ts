import { PokedexQuery } from '@generated/graphql'
import { LANGUAGES, Pokedex, PokemonSummary, STATS } from '@type'
import { convertToNationalDexNo } from '@utils'

// Convert graphql results to local pokedex type
const index = (pokedex: PokedexQuery['pokedex']): Pokedex => {
  return pokedex.map((pokemon): PokemonSummary => {
    return {
      abilities: pokemon.abilities.map((a) => {
        return (
          a.ability?.abilityNames.find((a) => a.language_id === LANGUAGES.EN)
            ?.name || ''
        )
      }),
      dexNumber: convertToNationalDexNo(pokemon.id),
      key: pokemon.key,
      name:
        pokemon.specy?.names.find((n) => n.language_id === LANGUAGES.EN)
          ?.name || '',
      sprite:
        pokemon.sprites[0].sprites['official-artwork'].front_default || '',
      stats: {
        hp:
          pokemon.stats.find((stat) => stat.stat_id === STATS.HP)?.base_stat ||
          0,
        attack:
          pokemon.stats.find((stat) => stat.stat_id === STATS.ATTACK)
            ?.base_stat || 0,
        defense:
          pokemon.stats.find((stat) => stat.stat_id === STATS.DEFENSE)
            ?.base_stat || 0,
        specialAttack:
          pokemon.stats.find((stat) => stat.stat_id === STATS.SPECIAL_ATTACK)
            ?.base_stat || 0,
        specialDefense:
          pokemon.stats.find((stat) => stat.stat_id === STATS.SPECIAL_DEFENSE)
            ?.base_stat || 0,
        speed:
          pokemon.stats.find((stat) => stat.stat_id === STATS.SPEED)
            ?.base_stat || 0,
      },
      types: pokemon.types.map((t) => t.type?.name || ''),
    }
  })
}

export default index
