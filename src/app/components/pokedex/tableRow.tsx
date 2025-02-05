import { Flex, Table } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
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
          priority
        />
      </Table.Cell>
      <Table.Cell className={styles.td}>{pokemonSummary.dexNumber}</Table.Cell>
      <Table.Cell className={styles.td}>
        <Link href={pokemonSummary.key}>{pokemonSummary.name}</Link>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Flex as="span" gap="1" className={styles.types}>
          {pokemonSummary.types?.map((type) => (
            <TypeBadge
              type={type as PokemonType}
              key={`${pokemonSummary.dexNumber}-${type}`}
            ></TypeBadge>
          ))}
        </Flex>
      </Table.Cell>
      <Table.Cell className={styles.td}>
        <Flex as="span" direction="column">
          {pokemonSummary.abilities?.map((ability, idx) => (
            <span key={`${pokemonSummary.dexNumber}-type-${idx}`}>
              {ability}
            </span>
          ))}
        </Flex>
      </Table.Cell>
      <Table.Cell className={styles.td}>{pokemonSummary.stats.hp}</Table.Cell>
      <Table.Cell className={styles.td}>
        {pokemonSummary.stats.attack}
      </Table.Cell>
      <Table.Cell className={styles.td}>
        {pokemonSummary.stats.defense}
      </Table.Cell>
      <Table.Cell className={styles.td}>
        {pokemonSummary.stats.specialAttack}
      </Table.Cell>
      <Table.Cell className={styles.td}>
        {pokemonSummary.stats.specialDefense}
      </Table.Cell>
      <Table.Cell className={styles.td}>
        {pokemonSummary.stats.speed}
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow
