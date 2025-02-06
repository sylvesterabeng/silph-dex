import { PokemonClient } from 'pokenode-ts'

import { convertToAvatar } from '@presenter'
import { UserAvatar } from '@type'
import { getRandomId } from '@utils'

export const fetchAvatar = async (): Promise<UserAvatar> => {
  const api = new PokemonClient()

  const speciesCount = (await api.listPokemonSpecies(0, 0)).count
  const id = getRandomId(1, speciesCount)

  const pokemon = await api.getPokemonById(id)
  const species = await api.getPokemonSpeciesById(id)

  return convertToAvatar(pokemon, species)
}
