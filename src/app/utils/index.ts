import { languageRecords, LANGUAGES } from '@type'

export const isEnglish = (apiType: string): boolean =>
  languageRecords[apiType.toLowerCase()] === LANGUAGES.EN

export const convertHeightToMeter = (height: number) => height / 10

export const convertWeightToKilogram = (weight: number) => weight / 10

/**
 *  @param rate - The chance of this Pokémon being female, in eighths; or -1 for genderless
 *  @returns the gender rate text
 */
export const convertGenderRate = (rate: number) =>
  rate > 0 ? `Male: ${rate / 8}% Female: ${1 - rate / 8}%` : 'Gender unknown'

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const capitalizeAndRemoveHypens = (str: string): string =>
  capitalize(str).split('-').join(' ')
