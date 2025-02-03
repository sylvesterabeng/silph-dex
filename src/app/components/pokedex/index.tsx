import { Avatar, Box, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

import { TypeBadge } from '@components'

import styles from './style.module.css'

interface Props {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemons: any
}

const Index: React.FC<Props> = ({ label, pokemons }) => {
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
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {pokemons.map((pokemon: any, idx: any) => (
              <tr key={idx}>
                <td className={styles.td}>
                  <Avatar
                    src={
                      pokemon.sprites[0].sprites['official-artwork']
                        .front_default
                    }
                    className={styles.sprite}
                    fallback=""
                    color="gray"
                  ></Avatar>
                </td>
                <td className={styles.td}>
                  <Text as="span">#{String(pokemon.id).padStart(4, '0')}</Text>
                </td>
                <td className={styles.td}>{pokemon.specy.names[0].name}</td>
                <td className={styles.td}>
                  <Flex as="span" gap="2" className={styles.types}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {pokemon.types.map((t: any) => (
                      <TypeBadge
                        type={t.type.name}
                        key={`${pokemon.id}-${t.type.name}`}
                      ></TypeBadge>
                    ))}
                  </Flex>
                </td>
                <td className={styles.td}>
                  <Flex as="span" direction="column">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {pokemon.abilities.map((a: any) => (
                      <span
                        key={`${pokemon.id}-${a.ability.abilityNames[0].name}`}
                      >
                        {a.ability.abilityNames[0].name}
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
