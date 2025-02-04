import { Pokemon, OtherPokemonSprites, TYPES } from 'pokenode-ts'

export interface PokemonSummary
  extends Pick<Pokemon, 'id' | 'types' | 'abilities' | 'stats'> {
  name: string
  sprites?: OtherPokemonSprites['official-artwork']
}

export type Pokedex = PokemonSummary[]

export type PokemonType = Lowercase<keyof typeof TYPES>
