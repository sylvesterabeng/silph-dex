import { notFound } from 'next/navigation'
import { PokemonClient } from 'pokenode-ts'

import { convertToPokemon } from '@presenter'
import { Pokemon } from '@type'

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
  const api = new PokemonClient()
  let species
  try {
    species = await api.getPokemonSpeciesByName(name)
  } catch {
    notFound()
  }

  const pokemon = await api.getPokemonById(species.id)

  return convertToPokemon(species, pokemon)
}
