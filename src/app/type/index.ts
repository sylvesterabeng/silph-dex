import { TYPES } from 'pokenode-ts'

export interface PokemonSummary {
  id?: number
  abilities?: string[]
  name?: string
  sprite?: string
  stats?: string
  types?: string[]
}

export type Pokedex = PokemonSummary[]

export type PokemonType = Lowercase<keyof typeof TYPES>
