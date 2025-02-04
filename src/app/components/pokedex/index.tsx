import { Avatar, Box, Flex, Heading, Text } from '@radix-ui/themes'
import { Pokedex, PokemonType } from '@type'
import React from 'react'

import { TypeBadge } from '@components'

import styles from './style.module.css'

interface Props {
  label: string
  pokedex: Pokedex
}

const Index: React.FC<Props> = ({ label, pokedex }) => {
  return (
    <Box>
      <Heading
        size={{
          initial: '6',
          md: '8',
        }}
      >
        {label}
      </Heading>
      <Box className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}></th>
              <th className={styles.th}>No.</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Abilities</th>
            </tr>
          </thead>
          <tbody>
            {}
            {pokedex.map((pokemon, idx) => (
              <tr key={idx}>
                <td className={styles.td}>
                  {pokemon.sprites?.front_default ? (
                    <Avatar
                      src={pokemon.sprites?.front_default}
                      className={styles.sprite}
                      fallback=""
                      color="gray"
                    />
                  ) : (
                    <Avatar
                      className={styles.sprite}
                      fallback=""
                      color="gray"
                    />
                  )}
                </td>
                <td className={styles.td}>
                  <Text as="span">#{String(pokemon.id).padStart(4, '0')}</Text>
                </td>
                <td className={styles.td}>{pokemon.name}</td>
                <td className={styles.td}>
                  <Flex as="span" gap="1" className={styles.types}>
                    {pokemon.types.map((t) => (
                      <TypeBadge
                        type={t.type.name as PokemonType}
                        key={`${pokemon.id}-${t.type.name}`}
                      ></TypeBadge>
                    ))}
                  </Flex>
                </td>
                <td className={styles.td}>
                  <Flex as="span" direction="column">
                    {pokemon.abilities.map((a, idx) => (
                      <span key={`${pokemon.id}-type-${idx}`}>
                        {a.ability.name}
                      </span>
                    ))}
                  </Flex>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  )
}

export default Index
