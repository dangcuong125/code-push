import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Pressable,
  //   Flex,
  Text,
} from 'native-base'
import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector'
// import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch'
import { PODCASTS } from '@clvtube/mocks/homePage'
import { IPodcastTypeCarouselProps, IPodcastTypes } from '../interfaces'

const PodcastTypeCarousel = ({ item, onPress }: IPodcastTypeCarouselProps) => {
  return (
    <Button
      marginTop="20px"
      marginLeft="16px"
      borderColor="#3D9BE0"
      bgColor={item.backgroundColor}
      color={item.color}
      onPress={onPress}
      variant="outline">
      <Text style={{ color: item.color }}>{item.type}</Text>
    </Button>
  )
}

export const PodcastList = () => {
  // const dispatch = useAppDispatch()
  const PODCAST_TYPE = useAppSelector(state => state.podcastList.podcastTypes)
  const renderItem = ({ item }: { item: IPodcastTypes }) => {
    return (
      <PodcastTypeCarousel
        item={item}
        onPress={() => console.log('hello world')}
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
          data={PODCAST_TYPE}
          renderItem={renderItem}
          horizontal={true}
        />
        {PODCASTS?.map((item, index) => (
          <ScrollView key={index}>
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
          </ScrollView>
        ))}
      </Box>
    </Box>
  )
}
