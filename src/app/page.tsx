import Image from 'next/image'
import styles from './page.module.css'
import { Pokedex } from '@components'
import { fetchLatestGeneration } from '@api/generation'
import { fetchPokedex } from '@api/pokedex'

// TODO: Create components & add designs
const Home: React.FC = async () => {
  const generation = await fetchLatestGeneration()
  // const latestGeneration = generation[generation.length - 1].id
  const pokemons = await fetchPokedex()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Pokedex label="National Pokedex" pokemons={pokemons} />
      </main>
    </div>
  )
}

export default Home
