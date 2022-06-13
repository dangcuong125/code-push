import {
  Box,
  Heading,
  HStack,
  Button,
  Pressable,
  Image,
  //   Flex,
  Text,
} from 'native-base'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useAppSelector } from '@clvtube/hooks/useAppSelector'
import { useAppDispatch } from '@clvtube/hooks/useAppDispatch'
import { handleClickPodcastList } from '../redux/podcastList'
import { imagePodcast } from '@clvtube/common/constants/imagePath'

const Item = ({ item, backgroundColor, color, onPress }: any) => {
  return (
    <Button
      marginTop="20px"
      marginLeft="16px"
      borderColor="#3D9BE0"
      bgColor={backgroundColor}
      color={color}
      onPress={onPress}
      variant="outline">
      <Text style={{ color: item.color }}>{item.type}</Text>
    </Button>
  )
}

const data = [
  {
    id: 1,
    image: imagePodcast.PODCAST_LIST,
    title: 'Title for teacher, you can write anything here',
    hashtag: '#Friend',
  },
  {
    id: 2,
    image: imagePodcast.PODCAST_LIST,
    title: 'Title for teacher, you can write anything here',
    hashtag: '#Friend',
  },
  {
    id: 3,
    image: imagePodcast.PODCAST_LIST,
    title: 'Title for teacher, you can write anything here123',
    hashtag: '#Friend',
  },
]

export const PodcastList = () => {
  const [selectedId, setSelectedId] = useState(null)
  const dispatch = useAppDispatch()
  const podcastTypes = useAppSelector(state => state.podcastList.podcastTypes)
  const renderItem = ({ item }: any) => {
    return (
      <Item
        item={item}
        onPress={() => {
          dispatch(handleClickPodcastList(item.id))
          setSelectedId(item.id)
        }}
        dispatch={dispatch}
        backgroundColor={item.backgroundColor}
        color={item.color}
      />
    )
  }
  return (
    <Box bgColor="#FFFFFF" marginTop="16px">
      <Box margin="16px">
        <HStack alignItems="center" justifyContent="space-between">
          <Heading color="#222B45">Danh sách Podcast</Heading>
          <Text
            style={{ color: '#216BCD' }}
            onPress={() => console.log('See All')}>
            Xem tất cả
          </Text>
        </HStack>
        <FlatList
          data={podcastTypes}
          renderItem={renderItem}
          horizontal={true}
          extraData={selectedId}
        />
        {data.map(item => (
          <Pressable
            marginTop={'20px'}
            borderColor="primary.100"
            borderWidth={1}
            padding="20px"
            width="360px"
            textAlign={'center'}
            borderRadius={'10px'}>
            <HStack>
              <Image source={item.image} />
              <Box marginLeft={'18px'}>
                <Text
                  marginTop={'10px'}
                  width="200px"
                  fontSize="14px"
                  fontWeight={600}
                  color="tileText.100">
                  {item.title}
                </Text>
                <Text color="neutral.300">{item.hashtag}</Text>
              </Box>
            </HStack>
          </Pressable>
        ))}
      </Box>
    </Box>
  )
}
