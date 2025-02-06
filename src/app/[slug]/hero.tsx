import { Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import { TypeBadge } from '@components'
import { Pokemon, PokemonType } from '@type'

interface Props {
  pokemon: Pokemon
}

const Hero: React.FC<Props> = ({ pokemon }) => {
  return (
    <Flex direction={{ initial: 'column', sm: 'row' }} gap="5" align="center">
      <Image
        className="pokemonDetail__sprite"
        src={pokemon.sprite || ''}
        alt={pokemon.name}
        height={360}
        width={360}
        priority
      />
      <Flex
        direction="column"
        align={{ initial: 'center', sm: 'start' }}
        gap="1"
      >
        <Text color="gray" size={{ initial: '1', sm: '2' }}>
          {pokemon.dexNumber}
        </Text>
        <Heading size="9" mb="5">
          {pokemon.name}
        </Heading>

        <Text size={{ initial: '1', sm: '2' }}>{pokemon.genus}</Text>
        <Text
          className="pokemonDetail__flavorText"
          size={{ initial: '1', sm: '2' }}
          color="gray"
          align={{ initial: 'center', sm: 'left' }}
        >
          {pokemon.flavorText}
        </Text>

        <Flex as="span" gap="2" mt="3">
          {pokemon.types?.map((type) => (
            <TypeBadge key={type} type={type as PokemonType}></TypeBadge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Hero
