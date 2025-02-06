'use client'
import { Avatar, Box, Flex, Text } from '@radix-ui/themes'
import { accentColorPropDef } from '@radix-ui/themes/props'
import React from 'react'

import { UserAvatar } from '@type'

import styles from './styles.module.scss'

interface Props {
  avatar: UserAvatar
}

const Index: React.FC<Props> = ({ avatar }) => {
  const name = sessionStorage.getItem('avatar_name')
  const sprite = sessionStorage.getItem('avatar_sprite')
  const color = sessionStorage.getItem('avatar_color')

  if (!name || !sprite || !color) {
    sessionStorage.setItem('avatar_name', avatar.name)
    sessionStorage.setItem('avatar_sprite', avatar.sprite)
    sessionStorage.setItem('avatar_color', avatar.iconColor)
  }

  return (
    <Flex align="center" gap="2">
      <Box className={styles.avatar}>
        <Avatar
          className={styles.sprite}
          src={sprite || ''}
          fallback={''}
          radius="full"
          size={{ initial: '1', sm: '2' }}
        />
        <Avatar
          className={styles.background}
          fallback={''}
          color={color as typeof accentColorPropDef.color.default}
          radius="full"
          size={{ initial: '1', sm: '2' }}
          variant="soft"
        />
      </Box>
      <Text size={{ initial: '1', sm: '2' }} color="gray">
        {name}
      </Text>
    </Flex>
  )
}

export default Index
