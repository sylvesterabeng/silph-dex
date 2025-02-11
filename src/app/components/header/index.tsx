import { Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

import Avatar from './avatar'
import styles from './styles.module.scss'

const Index: React.FC = async () => {
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
        <Text className={styles.icon} size={{ initial: '3', sm: '4' }}>
          SILPH
        </Text>
      </Link>
      <Avatar />
    </Flex>
  )
}

export default Index
