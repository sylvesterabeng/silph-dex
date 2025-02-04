import { Badge, Text, BadgeProps } from '@radix-ui/themes'
import React from 'react'

import { PokemonType } from '@type'

import styles from './styles.module.scss'

interface Props {
  type: PokemonType
}

const Index: React.FC<Props> = ({ type }) => {
  const getBadge = (): BadgeProps => {
    switch (type) {
      case 'normal':
        return { color: 'gold' }
      case 'fire':
        return { color: 'red' }
      case 'water':
        return { color: 'blue' }
      case 'electric':
        return { color: 'yellow' }
      case 'grass':
        return { color: 'grass' }
      case 'ice':
        return { color: 'cyan' }
      case 'fighting':
        return { color: 'orange' }
      case 'poison':
        return { color: 'plum' }
      case 'ground':
        return { color: 'brown' }
      case 'flying':
        return { color: 'sky' }
      case 'psychic':
        return { color: 'purple' }
      case 'bug':
        return { color: 'lime' }
      case 'rock':
        return { color: 'amber' }
      case 'ghost':
        return { color: 'violet' }
      case 'dragon':
        return { color: 'indigo' }
      case 'dark':
        return { color: 'gray', highContrast: true }
      case 'steel':
        return { color: 'gray' }
      case 'fairy':
        return { color: 'pink' }
      default:
        return {}
    }
  }

  return (
    <Badge {...getBadge()}>
      <Text className={styles.text}>{type}</Text>
    </Badge>
  )
}

export default Index
