import { Box, DataList, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

import { BasicInfo } from '@type'

interface Props {
  basicInfo: BasicInfo
}

const BasicInfoSection: React.FC<Props> = ({ basicInfo }) => {
  return (
    <Box>
      <Heading
        as="h2"
        align="center"
        size={{ initial: '2', sm: '3' }}
        mb="4"
        color="gray"
      >
        Misc. Info
      </Heading>
      <Flex gap="8" align="start" className="pokemonDetail__miscInfo">
        <DataList.Root
          size={{ initial: '1', sm: '2' }}
          orientation={{ initial: 'vertical', sm: 'horizontal' }}
        >
          <DataList.Item>
            <DataList.Label>Height</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.height} m</Text>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Weight</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.weight} kg</Text>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Gender ratio</DataList.Label>
            <DataList.Value className="pokemonDetail__genderRate">
              {basicInfo.genderRate.map((gender) => (
                <Text key={gender}>{gender}</Text>
              ))}
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Egg group</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.eggGroup.join(', ')}</Text>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Egg Cycle</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.eggCycle} cycles</Text>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root
          size={{ initial: '1', sm: '2' }}
          orientation={{ initial: 'vertical', sm: 'horizontal' }}
        >
          <DataList.Item>
            <DataList.Label>EV yield</DataList.Label>
            <DataList.Value className="pokemonDetail__ev">
              {basicInfo.evYield.map((ev) => (
                <Text key={ev}>{ev}</Text>
              ))}
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Catch Rate</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.catchRate}</Text>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Base Friendship</DataList.Label>
            <Text>{basicInfo.baseFriendship}</Text>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Base EXP</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.baseExp}</Text>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label>Growth rate</DataList.Label>
            <DataList.Value>
              <Text>{basicInfo.growthRate}</Text>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Flex>
    </Box>
  )
}

export default BasicInfoSection
