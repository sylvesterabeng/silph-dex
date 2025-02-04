import {
  TYPES,
  LANGUAGES as POKENODE_LANGUAGES,
  STATS as POKENODE_STATS,
} from 'pokenode-ts'

export interface PokemonSummary {
  id: number
  abilities: string[]
  name: string
  sprite?: string
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  types: string[]
}

export type Pokedex = PokemonSummary[]

export type PokemonType = Lowercase<keyof typeof TYPES>

export const LANGUAGES = POKENODE_LANGUAGES

export const STATS = POKENODE_STATS
