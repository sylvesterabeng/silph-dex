import React from 'react'

import { fetchPokedex } from '@api/pokedex'
import { Pokedex } from '@components'

import styles from './page.module.scss'

const Home: React.FC = async () => {
  const pokedex = await fetchPokedex()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Pokedex label="Silph Dex" pokedex={pokedex} />
      </main>
    </div>
  )
}

export default Home
