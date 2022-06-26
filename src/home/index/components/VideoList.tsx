import React from 'react'
import { FlatList } from 'react-native'
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from 'native-base'

import { useAppSelector } from '@clvtube/common/hooks/useAppSelector'
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch'

import { selectOnlyOneType } from '../redux/homePage'

import {
  IVideoListCarouselProps,
  IVideoTypeCarousel,
  VideoTypeCarouselProps,
} from '../interfaces'

const VideoTypeCarousel = ({ item, onPress }: VideoTypeCarouselProps) => {
  return (
    <Button
      height={'27px'}
      lineHeight={'27px'}
      px={2}
      marginLeft={3}
      variant="outline"
      borderColor="#3D9BE0"
      bgColor={item.backgroundColor}
      onPress={onPress}
      _text={{
        color: item.color,
        fontStyle: 'normal',
        height: '20px',
        fontWeight: 400,
      }}>
      {item.type}
    </Button>
  )
}

const VideoListCarousel = ({ item }: IVideoListCarouselProps) => {
  return (
    <Box
      mt={4}
      width={'222px'}
      px={4}
      py={2}
      marginRight={5}
      bgColor={'white'}
      borderRadius="12px">
      <Box>
        <Center>
          <Text
            fontStyle={'normal'}
            fontSize="16px"
            fontWeight={400}
            color={'#1A1A1A'}
            lineHeight={'22px'}>
            {item.title}
          </Text>
          <Image source={item.image} resizeMode="contain" mt={1} mb={4} />
          <Text
            fontStyle={'normal'}
            fontSize={'14px'}
            fontWeight={400}
            lineHeight={'19px'}
            color={'#1A1A1A'}>
            {item.content}
          </Text>
          <Text
            fontStyle={'normal'}
            fontSize={'16px'}
            fontWeight={400}
            lineHeight={'22px'}
            color={'#1A1A1A'}
            mt={2}>
            {item.suggestion}
          </Text>
        </Center>
      </Box>
    </Box>
  )
}

export const VideoList = () => {
  const videoTypeCarousel = useAppSelector(
    state => state?.homePage?.videoTypeCarousel,
  )
  const videoListCarousel = useAppSelector(state => state.homePage.videoList)

  const dispatch = useAppDispatch()

  const renderVideoTypeCarousel = ({ item }: { item: IVideoTypeCarousel }) => {
    return (
      <VideoTypeCarousel
        onPress={() => dispatch(selectOnlyOneType(item.id))}
        item={item}
      />
    )
  }

  const renderVideoListCarousel = ({ item }: IVideoListCarouselProps) => {
    return <VideoListCarousel item={item} />
  }

  return (
    <VStack bgColor={'transparent'}>
      <VStack bgColor={'white'} safeAreaY={4} space={5}>
        <HStack
          safeAreaX={4}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Heading
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={600}
            color={'#000000'}>
            Video
          </Heading>
          <Text
            fontStyle={'normal'}
            fontSize={'12px'}
            fontWeight={400}
            color={'#216BCD'}>
            Xem tất cả
          </Text>
        </HStack>
        <FlatList
          horizontal={true}
          data={videoTypeCarousel}
          renderItem={renderVideoTypeCarousel}
        />
      </VStack>
      <FlatList
        horizontal={true}
        data={videoListCarousel}
        renderItem={renderVideoListCarousel}
      />
    </VStack>
  )
}
