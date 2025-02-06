import {
  capitalize,
  capitalizeAndRemoveHypens,
  convertGenderRate,
  convertHeightToMeter,
  convertToNationalDexNo,
  convertWeightToKilogram,
  getEvfromStats,
  getLatestFlavorText,
  isEnglish,
} from '@utils'

import {
  Pokemon,
  PokemonLanguage,
  PokemonResponse,
  PokemonSpeciesResponse,
} from '@type'

// Convert pokenode-ts results to local pokedex type
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
      evYield: getEvfromStats(pokemon.stats),
      catchRate: species.capture_rate,
      baseFriendship: species.base_happiness,
      baseExp: pokemon.base_experience,
      growthRate: capitalizeAndRemoveHypens(species.growth_rate.name),
    },
    dexNumber: convertToNationalDexNo(pokemon.id),
    flavorText: getLatestFlavorText(species.flavor_text_entries),
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
