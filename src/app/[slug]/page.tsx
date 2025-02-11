import { Flex } from '@radix-ui/themes'
import React from 'react'

import { fetchPokemon } from '@api/pokemon'

import './styles.scss'
import BasicInfoSection from './basicInfoSection'
import Hero from './hero'
import Stats from './stats'

interface Props {
  params: Promise<{ slug: string }>
}

const Index: React.FC<Props> = async ({ params }) => {
  const pokemon = await fetchPokemon((await params).slug)

  return (
    <Flex
      className="pokemonDetail__container"
      direction="column"
      align="center"
      gap="9"
    >
      <Hero pokemon={pokemon} />
      <BasicInfoSection basicInfo={pokemon.basicInfo} />
      <Stats stats={pokemon.stats} />
    </Flex>
  )
}

export default Index
