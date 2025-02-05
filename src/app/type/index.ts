import { LANGUAGES, TYPES } from 'pokenode-ts'

export type {
  Pokemon as PokemonResponse,
  PokemonSpecies as PokemonSpeciesResponse,
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

interface Ability {
  name: string
  isHidden: boolean
}

export interface Pokemon {
  abilities: Ability[]
  dexNumber: string
  genus: string
  height: number
  name: string
  sprite?: string | null
  types: string[]
  weight: number
}

export type Pokedex = PokemonSummary[]
export type PokemonType = Lowercase<keyof typeof TYPES>
export type PokemonLanguage = Lowercase<keyof typeof LANGUAGES>

export const languageRecords = Object.fromEntries(
  Object.entries(LANGUAGES).map(([key, val]) => [key.toLowerCase(), val])
) as Record<string, number>
