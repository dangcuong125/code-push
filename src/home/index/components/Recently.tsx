import { Box, Heading, Image, Progress, Text } from 'native-base'
import { FlatList } from 'react-native'
import React from 'react'
import { DATA_VIEWED_RECENTLY } from '@clvtube/mocks/homePage'
import { IDataViewRecently } from '../interfaces'

const VideoRecommended = ({ item }: { item: IDataViewRecently }) => {
  return (
    <Box mt="13px">
      <Box width="161px" marginRight={'21px'}>
        <Image source={item.image} alt="hello" />
        <Text
          color="text.300"
          fontWeight={600}
          fontSize="10px"
          marginTop={'12px'}>
          {item.title}
        </Text>
        <Text color="text.300" fontWeight={400}>
          {item.content}
        </Text>
        <Progress value={item.progress} size="xs" marginTop="9px" />
      </Box>
    </Box>
  )
}

export const Recently = () => {
  const renderItem = ({ item }: { item: IDataViewRecently }) => {
    return <VideoRecommended item={item} />
  }
  return (
    <Box
      bgColor="#FFFFFF"
      marginTop="16px"
      paddingBottom={'15px'}
      paddingTop="15px">
      <Box marginLeft="16px">
        <Heading color="text.200">Gần đây</Heading>
        <FlatList
          data={DATA_VIEWED_RECENTLY}
          horizontal={true}
          renderItem={renderItem}
        />
      </Box>
    </Box>
  )
}
