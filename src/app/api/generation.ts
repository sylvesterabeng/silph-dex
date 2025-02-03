import { gql } from '@apollo/client'

import client from './client'

const GENERATIONS = gql`
  query generations {
    generations: pokemon_v2_generation {
      id
    }
  }
`

export async function fetchLatestGeneration() {
  const { data } = await client.query({
    query: GENERATIONS,
  })

  return data.generations
}
