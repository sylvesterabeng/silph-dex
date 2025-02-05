import { languageRecords, LANGUAGES } from '@type'

export function isEnglish(apiType: string): boolean {
  return languageRecords[apiType.toLowerCase()] === LANGUAGES.EN
}
