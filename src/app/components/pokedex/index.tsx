import { Avatar, Box, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

import { TypeBadge } from '@components'
import { Pokedex, PokemonType } from '@type'

import styles from './styles.module.scss'

interface Props {
  label: string
  pokedex: Pokedex
}

const Index: React.FC<Props> = ({ label, pokedex }) => {
  return (
    <Flex direction="column" gap="8">
      <Heading size="8">{label}</Heading>
      <Box className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}></th>
              <th className={styles.th}>No.</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Abilities</th>
              <th className={styles.th}>HP</th>
              <th className={styles.th}>Att</th>
              <th className={styles.th}>Def</th>
              <th className={styles.th}>S.Att</th>
              <th className={styles.th}>S.Def</th>
              <th className={styles.th}>Spd</th>
            </tr>
          </thead>
          <tbody>
            {pokedex.map((pokemon, idx) => (
              <tr key={idx}>
                <td className={styles.td}>
                  <Avatar
                    src={pokemon.sprite}
                    className={styles.sprite}
                    fallback=""
                    color="gray"
                  />
                </td>
                <td className={styles.td}>
                  <Text as="span">#{String(pokemon.id).padStart(4, '0')}</Text>
                </td>
                <td className={styles.td}>{pokemon.name}</td>
                <td className={styles.td}>
                  <Flex as="span" gap="1" className={styles.types}>
                    {pokemon.types?.map((type) => (
                      <TypeBadge
                        type={type as PokemonType}
                        key={`${pokemon.id}-${type}`}
                      ></TypeBadge>
                    ))}
                  </Flex>
                </td>
                <td className={styles.td}>
                  <Flex as="span" direction="column">
                    {pokemon.abilities?.map((ability, idx) => (
                      <span key={`${pokemon.id}-type-${idx}`}>{ability}</span>
                    ))}
                  </Flex>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.hp}</Text>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.attack}</Text>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.defense}</Text>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.specialAttack}</Text>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.specialDefense}</Text>
                </td>
                <td className={styles.td}>
                  <Text as="span">{pokemon.stats.speed}</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  )
}

export default Index
