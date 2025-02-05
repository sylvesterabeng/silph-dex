import { Flex, Table, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import { TypeBadge } from '@components'
import { PokemonSummary, PokemonType } from '@type'

import styles from './styles.module.scss'

interface Props {
  pokemonSummary: PokemonSummary
}

const TableRow: React.FC<Props> = ({ pokemonSummary }) => {
  return (
    <Table.Row align="center">
      <Table.Cell className={`${styles.td} ${styles.avatarWrapper}`}>
        <Image
          src={pokemonSummary.sprite || ''}
          className={styles.sprite}
          alt={`${pokemonSummary.name}-sprite`}
          width={40}
          height={40}
        />
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">#{String(pokemonSummary.id).padStart(4, '0')}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>{pokemonSummary.name}</Table.Cell>
      <Table.Cell className={styles.td}>
        <Flex as="span" gap="1" className={styles.types}>
          {pokemonSummary.types?.map((type) => (
            <TypeBadge
              type={type as PokemonType}
              key={`${pokemonSummary.id}-${type}`}
            ></TypeBadge>
          ))}
        </Flex>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Flex as="span" direction="column">
          {pokemonSummary.abilities?.map((ability, idx) => (
            <span key={`${pokemonSummary.id}-type-${idx}`}>{ability}</span>
          ))}
        </Flex>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.hp}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.attack}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.defense}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.specialAttack}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.specialDefense}</Text>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Text as="span">{pokemonSummary.stats.speed}</Text>
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow
