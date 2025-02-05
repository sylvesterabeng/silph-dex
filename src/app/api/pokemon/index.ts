import { PokemonClient } from 'pokenode-ts'

import { convertToPokemon } from '@presenter'
import { Pokemon } from '@type'

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
  const api = new PokemonClient()
  const pokemon = await api.getPokemonByName(name)
  const species = await api.getPokemonSpeciesById(pokemon.id)

  return convertToPokemon(pokemon, species)
}
