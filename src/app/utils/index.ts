import {
  FlavorTextResponse,
  languageRecords,
  LANGUAGES,
  PokemonStatResponse,
} from '@type'

export const isEnglish = (apiType: string): boolean =>
  languageRecords[apiType.toLowerCase()] === LANGUAGES.EN

export const convertToNationalDexNo = (id: number): string =>
  `#${String(id).padStart(4, '0')}`

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const capitalizeAndRemoveHypens = (str: string): string =>
  capitalize(str).split('-').join(' ')

export const convertHeightToMeter = (height: number) => height / 10

export const convertWeightToKilogram = (weight: number) => weight / 10

/**
 *  @param rate - The chance of this Pokémon being female, in eighths; or -1 for genderless
 *  @returns the gender rate text
 */
export const convertGenderRate = (rate: number): string[] =>
  rate > 0
    ? [`Male: ${rate / 8}%`, `Female: ${1 - rate / 8}%`]
    : ['Gender unknown']

export const getEvfromStats = (stats: PokemonStatResponse[]): string[] => {
  return stats.reduce((acc, { stat, effort }) => {
    const val = `${capitalizeAndRemoveHypens(stat.name)}: ${effort}`
    if (effort) {
      acc = [...acc, val]
    }
    return acc
  }, [] as string[])
}

export const getLatestFlavorText = (
  flavorTexts: FlavorTextResponse[]
): string =>
  flavorTexts.findLast((f) => isEnglish(f.language.name))?.flavor_text || ''
