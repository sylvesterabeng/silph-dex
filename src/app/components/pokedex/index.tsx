import { Avatar, Box, Flex, Heading, Table, Text } from '@radix-ui/themes'
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
        <Table.Root
          className={styles.table}
          variant="surface"
          size={{ initial: '1', md: '2' }}
        >
          <Table.Header>
            <Table.Row align="center">
              <Table.ColumnHeaderCell
                className={styles.th}
              ></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                No.
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Name
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Type
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Abilities
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                HP
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Att
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Def
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                S.Att
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                S.Def
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={styles.th}>
                Spd
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {pokedex.map((pokemon, idx) => (
              <Table.Row key={idx} align="center">
                <Table.Cell className={`${styles.td} ${styles.avatarWrapper}`}>
                  <Avatar
                    src={pokemon.sprite}
                    className={styles.sprite}
                    fallback=""
                    color="gray"
                  />
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">#{String(pokemon.id).padStart(4, '0')}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>{pokemon.name}</Table.Cell>
                <Table.Cell className={styles.td}>
                  <Flex as="span" gap="1" className={styles.types}>
                    {pokemon.types?.map((type) => (
                      <TypeBadge
                        type={type as PokemonType}
                        key={`${pokemon.id}-${type}`}
                      ></TypeBadge>
                    ))}
                  </Flex>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Flex as="span" direction="column">
                    {pokemon.abilities?.map((ability, idx) => (
                      <span key={`${pokemon.id}-type-${idx}`}>{ability}</span>
                    ))}
                  </Flex>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.hp}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.attack}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.defense}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.specialAttack}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.specialDefense}</Text>
                </Table.Cell>
                <Table.Cell className={styles.td}>
                  <Text as="span">{pokemon.stats.speed}</Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Flex>
  )
}

export default Index
