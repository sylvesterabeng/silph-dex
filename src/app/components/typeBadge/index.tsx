import { Avatar, Badge, Box, Heading, Text } from '@radix-ui/themes'
import { accentColorPropDef } from '@radix-ui/themes/props'
import React, { CSSProperties } from 'react'

type Type =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

interface Props {
  type: Type
}

interface BadgeProps {
  color: Color
  highContrast?: boolean
}

type Color = typeof accentColorPropDef.color.default

const style: CSSProperties = { textTransform: 'capitalize' }

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
    }
  }

  return (
    <Box className="badgeWrapper">
      <Badge {...getBadge()}>
        <Text style={{ textTransform: 'capitalize', fontSize: '10px' }}>
          {type}
        </Text>
      </Badge>
    </Box>
  )
}

export default Index
