import { Flex, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      height="100vh"
      gap="2"
    >
      <Flex gap="4" align="center">
        <Text size="6">404</Text> <Separator orientation="vertical" />
        <Text size="2">This page could not be found</Text>
      </Flex>
      <Text size="1" color="gray">
        <Link href="/">Return to Silph Dex</Link>
      </Text>
    </Flex>
  )
}

export default NotFound
