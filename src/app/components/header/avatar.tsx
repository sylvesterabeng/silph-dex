'use client'
import { Avatar, Box, Flex, Skeleton, Text } from '@radix-ui/themes'
import { accentColorPropDef } from '@radix-ui/themes/props'
import React from 'react'

import { UserAvatar } from '@type'

import styles from './styles.module.scss'

interface Props {
  avatar: UserAvatar
}

const Index: React.FC<Props> = ({ avatar }) => {
  const [avatarState, setAvatarState] = React.useState({
    name: '',
    color: 'gray',
    sprite: '',
  })

  const { name, color, sprite } = avatarState

  React.useEffect(() => {
    const nameData = sessionStorage.getItem('avatar_name') || ''
    const colorData = sessionStorage.getItem('avatar_color') || ''
    const spriteData = sessionStorage.getItem('avatar_sprite') || ''

    setAvatarState({
      name: nameData,
      color: colorData,
      sprite: spriteData,
    })

    if (!nameData || !colorData || !spriteData) {
      sessionStorage.setItem('avatar_name', avatar.name)
      sessionStorage.setItem('avatar_color', avatar.iconColor)
      sessionStorage.setItem('avatar_sprite', avatar.sprite)

      setAvatarState({
        name: avatar.name,
        color: avatar.iconColor,
        sprite: avatar.sprite,
      })
    }
  }, [avatar.iconColor, avatar.name, avatar.sprite])

  return (
    <Flex align="center" gap="2">
      <Box className={styles.avatar}>
        <Avatar
          className={styles.sprite}
          src={sprite}
          fallback={''}
          radius="full"
          size={{ initial: '1', sm: '2' }}
        ></Avatar>
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
        <Skeleton
          width="100px"
          height={{ initial: '14px', sm: '20px' }}
          loading={!name}
        >
          {name}
        </Skeleton>
      </Text>
    </Flex>
  )
}

export default Index
