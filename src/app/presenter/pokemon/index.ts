import {
  Pokemon,
  PokemonLanguage,
  PokemonResponse,
  PokemonSpeciesResponse,
} from '@type'

import {
  capitalize,
  capitalizeAndRemoveHypens,
  convertGenderRate,
  convertHeightToMeter,
  convertWeightToKilogram,
  isEnglish,
} from '../../utils'

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
      /** Convert from decimeter to meter */
      height: convertHeightToMeter(pokemon.height),
      /** Convert from hectogram to kilogram */
      weight: convertWeightToKilogram(pokemon.weight),
      genderRate: convertGenderRate(species.gender_rate),
      eggGroup: species.egg_groups.map((e) => capitalize(e.name)),
      eggCycle: species.hatch_counter,
      evYield: 'WIP',
      catchRate: species.capture_rate,
      baseFriendship: species.base_happiness,
      baseExp: pokemon.base_experience,
      growthRate: capitalizeAndRemoveHypens(species.growth_rate.name),
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
