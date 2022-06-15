import { Box, HStack, Heading, Text, Button, Image } from 'native-base'
import React from 'react'
import { FlatList } from 'react-native'
import { useAppSelector } from '@clvtube/hooks/useAppSelector'
import { useAppDispatch } from '@clvtube/hooks/useAppDispatch'
import { selectOnlyOneType } from '../redux/homePage'
import {
  VideoTypeCarouselProps,
  IVideoListCarouselProps,
  IVideoTypeCarousel,
} from '../interfaces'

const VideoTypeCarousel = ({ item, onPress }: VideoTypeCarouselProps) => {
  return (
    <Button
      marginTop="20px"
      marginLeft="16px"
      borderColor="#3D9BE0"
      bgColor={item.backgroundColor}
      onPress={onPress}
      variant="outline">
      <Text color={item.color}>{item.type}</Text>
    </Button>
  )
}

const VideoListCarousel = ({ item }: IVideoListCarouselProps) => {
  return (
    <Box
      marginTop="17px"
      width="222px"
      bgColor="#FFFFFF"
      marginLeft="31px"
      padding="10px"
      borderRadius="10px">
      <Box margin="auto">
        <Text color="neutral.800" fontSize="14px" fontWeight={600}>
          {item.title}
        </Text>
        <Image source={item.image} marginTop="8px" />
        <Text color="" marginTop="16px">
          {item.content}
        </Text>
        <Text color="neutral.800" fontWeight={600} textAlign="center">
          {item.suggestion}
        </Text>
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
    <>
      <Box
        marginTop="28px"
        bgColor="#FFFFFF"
        paddingBottom={'15px'}
        paddingTop="15px">
        <Box marginLeft="16px">
          <HStack
            alignItems="center"
            justifyContent="space-between"
            width="360px">
            <Heading color="text.200">Video</Heading>
            <Text color="text.500">Xem tất cả</Text>
          </HStack>
          <FlatList
            horizontal={true}
            data={videoTypeCarousel}
            renderItem={renderVideoTypeCarousel}
          />
        </Box>
      </Box>
      <FlatList
        horizontal={true}
        data={videoListCarousel}
        renderItem={renderVideoListCarousel}
      />
    </>
  )
}
