import { Box, Flex, Heading } from '@radix-ui/themes'
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
    <Flex direction="column" gap={{ initial: '4', sm: '8' }}>
      <Heading size="6" align="center" mt={{ initial: '8', sm: '0' }}>
        {label}
      </Heading>
      <Box className={styles.wrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
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
            {pokedex.map((pokemonSummary) => (
              <TableRow
                key={pokemonSummary.dexNumber}
                pokemonSummary={pokemonSummary}
              />
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  )
}

export default Index
