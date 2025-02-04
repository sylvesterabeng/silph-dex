import { convertToPokemonSummary } from '@presenter'
import { Pokedex } from '@type'
import { PokemonClient } from 'pokenode-ts'

export const fetchPokedex = async () => {
  const api = new PokemonClient()
  const BATCH_SIZE = 100

  try {
    const dexCount = (await api.listPokemonSpecies(0, 0)).count
    const pokedex: Pokedex = []

    for (let i = 1; i <= dexCount; i += BATCH_SIZE) {
      const batch = Array.from(
        { length: Math.min(BATCH_SIZE, dexCount - i + 1) },
        (_, j) => api.getPokemonById(i + j).then(convertToPokemonSummary)
      )
      const batchResults = await Promise.all(batch)
      pokedex.push(...batchResults)
    }

    return pokedex
  } catch (error) {
    console.error(error)
    return []
  }
}
