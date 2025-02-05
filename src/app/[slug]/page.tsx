import { DataList, Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import { fetchPokemon } from '@api/pokemon'
import { TypeBadge } from '@components'
import { PokemonType } from '@type'

import styles from './styles.module.scss'

interface Props {
  params: Promise<{ slug: string }>
}

const Index: React.FC<Props> = async ({ params }) => {
  const pokemon = await fetchPokemon((await params).slug)

  return (
    <Flex
      className={styles.container}
      direction="column"
      align="center"
      gap="8"
    >
      <Flex direction="column" align="center">
        <Image
          className={styles.sprite}
          src={pokemon.sprite || ''}
          alt={pokemon.name}
          height={400}
          width={400}
          priority
        />
        <Flex direction="column" align="center" gap="1">
          <Heading size="8">{pokemon.name}</Heading>
          <Text color="gray">{pokemon.genus}</Text>
          <Flex as="span" gap="1" className={styles.types}>
            {pokemon.types?.map((type) => (
              <TypeBadge key={type} type={type as PokemonType}></TypeBadge>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <DataList.Root size="1">
        <DataList.Item align="center">
          <DataList.Label>No.</DataList.Label>
          <DataList.Value>{pokemon.dexNumber}</DataList.Value>
        </DataList.Item>

        <DataList.Item align="center">
          <DataList.Label>Abilites</DataList.Label>
          <DataList.Value>
            <Flex direction="column">
              {pokemon.abilities.map((ability, i) => (
                <Text key={i}>{ability.name}</Text>
              ))}
            </Flex>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item align="center">
          <DataList.Label>Height</DataList.Label>
          <DataList.Value>
            <Text>{pokemon.height} m</Text>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item align="center">
          <DataList.Label>Weight</DataList.Label>
          <DataList.Value>
            <Text>{pokemon.weight} kg</Text>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Flex>
  )
}

export default Index
