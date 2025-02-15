import { accentColorPropDef } from '@radix-ui/themes/props'
import {
  LANGUAGES,
  TYPES,
  PokemonStat as PokemonStatResponse,
} from 'pokenode-ts'

export type {
  Pokemon as PokemonResponse,
  PokemonSpecies as PokemonSpeciesResponse,
  PokemonStat as PokemonStatResponse,
  FlavorText as FlavorTextResponse,
} from 'pokenode-ts'

export { LANGUAGES, STATS } from 'pokenode-ts'

interface Stats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface PokemonSummary {
  abilities: string[]
  dexNumber: string
  key: string
  name: string
  sprite?: string
  stats: Stats
  types: string[]
}

export interface BasicInfo {
  height: number
  weight: number
  genderRate: string[]
  eggGroup: string[]
  eggCycle: number
  evYield: string[]
  catchRate: number
  baseFriendship: number
  baseExp: number
  growthRate: string
}

interface Ability {
  name: string
  isHidden: boolean
}

export interface Pokemon {
  abilities: Ability[]
  basicInfo: BasicInfo
  dexNumber: string
  flavorText: string
  genus: string
  name: string
  sprite?: string | null
  stats: PokemonStatResponse[]
  types: string[]
}

export interface UserAvatar {
  iconColor: typeof accentColorPropDef.color.default
  name: string
  sprite: string
}

export type Pokedex = PokemonSummary[]
export type PokemonType = Lowercase<keyof typeof TYPES>
export type PokemonLanguage = Lowercase<keyof typeof LANGUAGES>

export const languageRecords = Object.fromEntries(
  Object.entries(LANGUAGES).map(([key, val]) => [key.toLowerCase(), val])
) as Record<string, number>
