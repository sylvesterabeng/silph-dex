import { Box, Flex, Heading, Table } from '@radix-ui/themes'
import React from 'react'

import { Pokedex } from '@type'

import styles from './styles.module.scss'
import TableRow from './tableRow'

interface Props {
  label: string
  pokedex: Pokedex
}

const Index: React.FC<Props> = ({ label, pokedex }) => {
  return (
    <Flex direction="column" gap="8">
      <Heading size="6" align="center">
        {label}
      </Heading>
      <Box className={styles.wrapper}>
        <Table.Root
          className={styles.table}
          variant="surface"
          size={{ initial: '1', sm: '2' }}
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
            {pokedex.map((pokemonSummary) => (
              <TableRow
                key={pokemonSummary.dexNumber}
                pokemonSummary={pokemonSummary}
              />
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Flex>
  )
}

export default Index
