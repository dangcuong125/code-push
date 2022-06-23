import React from 'react'
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector'
import { Box, Flex, Heading, Image, Pressable, Text } from 'native-base'
import { FlatList } from 'react-native'
import { IItemPodcastOutstanding, IItemPodcastPopular } from '../interfaces'

const ItemPodcastOutstanding = ({ item }: IItemPodcastOutstanding) => {
  return (
    <Pressable
      marginLeft="10px"
      borderRadius="10px"
      mt="12px"
      borderColor="primary.100"
      height="100px"
      bgColor="primary.100"
      maxWidth="400px"
      borderBottomWidth={1}>
      <Flex direction="row" margin="auto" padding="10px">
        <Box>
          <Text color="text.200">{item.title}</Text>
          <Text
            marginTop={'8px'}
            fontWeight={600}
            fontSize={12}
            color="text.200">
            {item.content}
          </Text>
        </Box>
        <Image
          source={item.image}
          width="76px"
          height="52px"
          marginLeft="8px"
        />
      </Flex>
    </Pressable>
  )
}
const ItemPodcastPopular = ({ item }: IItemPodcastPopular) => {
  return (
    <Flex
      direction="row"
      marginLeft="16px"
      marginTop={'15px'}
      borderWidth={1}
      borderRadius="10px"
      padding="10px"
      borderColor="primary.100">
      <Image source={item.image} />
      <Text color="text.200" width="150px" marginLeft="5px">
        {item.title}
      </Text>
    </Flex>
  )
}

export const OutStandingPodcast = () => {
  const podcastOutstanding = useAppSelector(
    state => state.podcastList.podcastOutstanding,
  )
  const podcastPopular = useAppSelector(
    state => state.podcastList.podcastPopular,
  )
  const renderPodcastOutstanding = ({ item }: IItemPodcastOutstanding) => {
    return <ItemPodcastOutstanding item={item} />
  }
  const renderPocastPopular = ({ item }: IItemPodcastPopular) => {
    return <ItemPodcastPopular item={item} />
  }
  return (
    <>
      <Box marginTop="16px" bgColor="#FFFFFF" padding="10px">
        <Box marginLeft="16px">
          <Heading marginTop="7px" color="#222B45">
            Podcast nổi bật
          </Heading>
          <FlatList
            data={podcastOutstanding}
            horizontal={true}
            renderItem={renderPodcastOutstanding}
          />
        </Box>
      </Box>
      <Box marginTop="16px" bgColor="#FFFFFF" padding="10px">
        <Box marginLeft="16px">
          <Heading color="#222B45">Podcast thịnh hành</Heading>
          <FlatList
            data={podcastPopular}
            horizontal={true}
            renderItem={renderPocastPopular}
          />
        </Box>
      </Box>
    </>
  )
}
