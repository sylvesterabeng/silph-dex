import { Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

import { fetchAvatar } from '@api/avatar'

import Avatar from './avatar'
import styles from './styles.module.scss'

const Index: React.FC = async () => {
  const avatar = await fetchAvatar()

  return (
    <Flex
      p={{ initial: '4', sm: '5' }}
      pb="3"
      pt="3"
      width="100%"
      className={styles.header}
      justify="between"
      align="center"
    >
      <Link href="/">
        <Text className={styles.icon} size={{ initial: '2', sm: '5' }}>
          SILPH
        </Text>
      </Link>
      <Avatar avatar={avatar} />
    </Flex>
  )
}

export default Index
