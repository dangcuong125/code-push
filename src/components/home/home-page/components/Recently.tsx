import { Box, Image, Progress, Text, Heading } from 'native-base'
import { FlatList } from 'react-native'
import React from 'react'
import { imagePodcast } from '@clvtube/common/constants/imagePath'

const data = [
  {
    id: 1,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'Mathematics',
    content: 'High School Algebra I: Help and Review',
    progress: 50,
  },
  {
    id: 2,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'Mathematics',
    content: 'High School Algebra I: Help and Review',
    progress: 50,
  },
  {
    id: 3,
    image: imagePodcast.MAYBE_YOU_LIKE,
    title: 'Mathematics',
    content: 'High School Algebra I: Help and Review',
    progress: 50,
  },
]

const VideoRecommended = ({ item }: any) => {
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
  const renderItem = ({ item }: any) => {
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
        <FlatList data={data} horizontal={true} renderItem={renderItem} />
      </Box>
    </Box>
  )
}
