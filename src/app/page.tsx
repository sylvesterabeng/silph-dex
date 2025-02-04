import React from 'react'

import { fetchPokedex } from '@api/pokedex'
import { Pokedex } from '@components'

import styles from './page.module.css'

// TODO: Create components & add designs
const Home: React.FC = async () => {
  // const generation = await fetchLatestGeneration()
  // const latestGeneration = generation[generation.length - 1].id
  const pokedex = await fetchPokedex()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Pokedex label="National Pokedex" pokedex={pokedex} />
      </main>
    </div>
  )
}

export default Home
