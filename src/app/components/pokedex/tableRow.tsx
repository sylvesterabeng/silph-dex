import { Flex } from '@radix-ui/themes'
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
    <tr className={styles.tr}>
      <td className={`${styles.td} ${styles.avatarWrapper}`}>
        <Image
          src={pokemonSummary.sprite || ''}
          className={styles.sprite}
          alt={`${pokemonSummary.name}-sprite`}
          width={40}
          height={40}
        />
      </td>
      <td className={styles.td}>{pokemonSummary.dexNumber}</td>
      <td className={styles.td}>
        <Link href={pokemonSummary.key}>{pokemonSummary.name}</Link>
      </td>
      <td className={styles.td}>
        <Flex as="span" gap="1" className={styles.types}>
          {pokemonSummary.types?.map((type) => (
            <TypeBadge
              type={type as PokemonType}
              key={`${pokemonSummary.dexNumber}-${type}`}
            ></TypeBadge>
          ))}
        </Flex>
      </td>
      <td className={styles.td}>
        <Flex as="span" direction="column">
          {pokemonSummary.abilities?.map((ability, idx) => (
            <span key={`${pokemonSummary.dexNumber}-type-${idx}`}>
              {ability}
            </span>
          ))}
        </Flex>
      </td>
      <td className={styles.td}>{pokemonSummary.stats.hp}</td>
      <td className={styles.td}>{pokemonSummary.stats.attack}</td>
      <td className={styles.td}>{pokemonSummary.stats.defense}</td>
      <td className={styles.td}>{pokemonSummary.stats.specialAttack}</td>
      <td className={styles.td}>{pokemonSummary.stats.specialDefense}</td>
      <td className={styles.td}>{pokemonSummary.stats.speed}</td>
    </tr>
  )
}

export default TableRow
