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
    <Flex
      direction={{ initial: 'column', sm: 'row' }}
      gap={{ initial: '0', sm: '5' }}
      align="center"
    >
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
        gap="2"
      >
        <Text color="gray" size={{ initial: '1', sm: '2' }}>
          {pokemon.dexNumber}
        </Text>
        <Heading size="9">{pokemon.name}</Heading>
        <Text color="gray" size={{ initial: '1', sm: '2' }}>
          {pokemon.genus}
        </Text>
        <Flex as="span" gap="2" mt="1">
          {pokemon.types?.map((type) => (
            <TypeBadge key={type} type={type as PokemonType}></TypeBadge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Hero
