import { DataList, Flex, Text } from '@radix-ui/themes'
import React from 'react'

import { BasicInfo } from '@type'

interface Props {
  basicInfo: BasicInfo
}

const BasicInfoSection: React.FC<Props> = ({ basicInfo }) => {
  return (
    <Flex gap="8">
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
          <Text>{basicInfo.genderRate}</Text>
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
          <DataList.Value>
            <Text>{basicInfo.evYield}</Text>
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
  )
}

export default BasicInfoSection
