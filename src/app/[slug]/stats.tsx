import { Box, DataList, Flex, Heading, Progress, Text } from '@radix-ui/themes'
import React from 'react'

import { PokemonStatResponse } from '@type'
import { capitalizeAndRemoveHypens } from '@utils'

interface Props {
  stats: PokemonStatResponse[]
}

const Stats: React.FC<Props> = ({ stats }) => {
  const getStatPercentage = (value: number) => {
    const BASE_LIMIT = 180

    return value > BASE_LIMIT ? 100 : (value / BASE_LIMIT) * 100
  }

  return (
    <Box>
      <Heading
        as="h2"
        align="center"
        size={{ initial: '2', sm: '3' }}
        mb="4"
        color="gray"
      >
        Stats
      </Heading>
      <DataList.Root size={{ initial: '1', sm: '2' }}>
        {stats.map((s) => (
          <DataList.Item key={s.stat.name}>
            <DataList.Label>
              {capitalizeAndRemoveHypens(s.stat.name)}
            </DataList.Label>
            <DataList.Value>
              <Flex gap="2" align="center">
                <Text style={{ width: '32px' }}>{s.base_stat}</Text>
                <Box width={{ initial: '120px', sm: '240px' }}>
                  <Progress
                    radius="small"
                    value={getStatPercentage(s.base_stat)}
                    size="3"
                  />
                </Box>
              </Flex>
            </DataList.Value>
          </DataList.Item>
        ))}
      </DataList.Root>
    </Box>
  )
}

export default Stats
