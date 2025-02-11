import { Box, Heading } from '@radix-ui/themes'
import React from 'react'

interface Props {
  children: React.ReactNode
  label: string
}

const Index: React.FC<Props> = ({ children, label }) => {
  return (
    <Box>
      <Heading as="h2" align="center" size="5" mb="5">
        {label}
      </Heading>
      {children}
    </Box>
  )
}

export default Index
