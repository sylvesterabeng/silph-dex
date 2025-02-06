import { accentColors } from '@radix-ui/themes/props'

import {
  UserAvatar,
  PokemonLanguage,
  PokemonResponse,
  PokemonSpeciesResponse,
} from '@type'
import { capitalize, getRandomItem, isEnglish } from '@utils'

// Convert pokenode-ts results for avatar
const index = (
  pokemon: PokemonResponse,
  species: PokemonSpeciesResponse
): UserAvatar => {
  const color = getRandomItem(accentColors)
  const pokemonName =
    species.names.find((g) => isEnglish(g.language.name as PokemonLanguage))
      ?.name || ''

  const name = `${capitalize(color)} ${pokemonName}`

  return {
    iconColor: color,
    name: name,
    sprite: pokemon.sprites.other?.['official-artwork'].front_default || '',
  }
}

export default index
