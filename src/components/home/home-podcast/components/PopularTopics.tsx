import { Text } from 'react-native'
import React from 'react'
import { Flex, Heading, Box } from 'native-base'
import { PopularTopics } from '@clvtube/common/components/popular-topic/index'
import { imagePodcast } from '@clvtube/common/constants/imagePath'

const PopularTopicsPodcast = () => {
  return (
    <Box marginLeft="17px" marginTop="24px">
      <Heading color={'#222B45'}>Chủ đề phổ biến</Heading>
      <Flex direction="row" justifyContent="space-around" marginTop="12px">
        <PopularTopics
          contentTopic="Mathematics"
          imageSrc={imagePodcast.MATH_PODCAST}
        />
        <PopularTopics
          contentTopic="Physics"
          imageSrc={imagePodcast.MATH_PODCAST}
        />
      </Flex>
      <Flex direction="row" justifyContent="space-around" marginTop="20px">
        <PopularTopics
          contentTopic="Chemistry"
          imageSrc={imagePodcast.MATH_PODCAST}
        />
        <PopularTopics
          contentTopic="Biology"
          imageSrc={imagePodcast.MATH_PODCAST}
        />
      </Flex>
    </Box>
  )
}
export default PopularTopicsPodcast
