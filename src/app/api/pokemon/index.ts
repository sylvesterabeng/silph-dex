import { notFound } from 'next/navigation'
import { PokemonClient } from 'pokenode-ts'

import { convertToPokemon } from '@presenter'
import { Pokemon } from '@type'

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
  const api = new PokemonClient()
  let pokemon
  try {
    pokemon = await api.getPokemonByName(name)
  } catch {
    notFound()
  }
  const species = await api.getPokemonSpeciesById(pokemon.id)

  return convertToPokemon(pokemon, species)
}
