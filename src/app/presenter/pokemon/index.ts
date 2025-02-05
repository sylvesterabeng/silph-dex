import {
  Pokemon,
  PokemonLanguage,
  PokemonResponse,
  PokemonSpeciesResponse,
} from '@type'

import { isEnglish } from '../../utils'

const index = (
  pokemon: PokemonResponse,
  species: PokemonSpeciesResponse
): Pokemon => {
  return {
    abilities: pokemon.abilities.map((a) => {
      return {
        name: a.ability.name,
        isHidden: a.is_hidden,
      }
    }),
    dexNumber: `#${String(pokemon.id).padStart(4, '0')}`,
    genus:
      species.genera.find((g) => isEnglish(g.language.name as PokemonLanguage))
        ?.genus || '',
    height: pokemon.height / 10,
    name:
      species.names.find((g) => isEnglish(g.language.name as PokemonLanguage))
        ?.name || '',
    sprite: pokemon.sprites.other?.['official-artwork'].front_default,
    types: pokemon.types.map((t) => t.type.name),
    weight: pokemon.weight / 10,
  }
}

export default index
