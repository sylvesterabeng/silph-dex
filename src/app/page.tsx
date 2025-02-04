import React from 'react'

import { fetchPokedex } from '@api/pokedex'
import { Pokedex } from '@components'

import styles from './page.module.css'

const Home: React.FC = async () => {
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
