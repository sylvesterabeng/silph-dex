import { PokemonSummary } from '@type'
import { Pokemon } from 'pokenode-ts'

const index = ({
  id,
  abilities,
  sprites,
  stats,
  species,
  types,
}: Pokemon): PokemonSummary => {
  return {
    id,
    name: species.name,
    abilities,
    sprites: sprites.other?.['official-artwork'],
    stats,
    types,
  }
}

export default index
