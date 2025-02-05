import {
  Pokemon,
  PokemonLanguage,
  PokemonResponse,
  PokemonSpeciesResponse,
} from '@type'

import { isEnglish } from '../../utils'

const index = (
  pokemon: PokemonResponse,
  species: PokemonSpeciesResponse
): Pokemon => {
  return {
    abilities: pokemon.abilities.map((a) => {
      return {
        name: a.ability.name,
        isHidden: a.is_hidden,
      }
    }),
    basicInfo: {
      /** pokemon.height: The height of this Pokémon in decimetres */
      height: pokemon.height / 10,
      /** pokemon.weight: The weight of this Pokémon in hectograms */
      weight: pokemon.weight / 10,
      /** gender: The chance of this Pokémon being female, in eighths; or -1 for genderless */
      genderRate:
        species.gender_rate > 0
          ? `Male: ${species.gender_rate / 8}% Female: ${1 - species.gender_rate / 8}%`
          : 'Gender Unknown', // TODO
      eggGroup: species.egg_groups.map((e) => e.name),
      eggCycle: species.hatch_counter,
      evYield: 'WIP',
      catchRate: species.capture_rate,
      baseFriendship: species.base_happiness,
      baseExp: pokemon.base_experience,
      growthRate: species.growth_rate.name,
    },
    dexNumber: `#${String(pokemon.id).padStart(4, '0')}`,
    genus:
      species.genera.find((g) => isEnglish(g.language.name as PokemonLanguage))
        ?.genus || '',

    name:
      species.names.find((g) => isEnglish(g.language.name as PokemonLanguage))
        ?.name || '',
    sprite: pokemon.sprites.other?.['official-artwork'].front_default,
    types: pokemon.types.map((t) => t.type.name),
  }
}

export default index
