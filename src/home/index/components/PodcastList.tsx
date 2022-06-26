import {
  Button,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React from 'react'
import { FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector'
import {
  IAudioTopicItem,
  IPodcastTypeCarouselProps,
  IPodcastTypes,
} from '../interfaces'
import { useGetPodcastList } from '../hooks/useGetPodcastList'

const PodcastTypeCarousel = ({ item, onPress }: IPodcastTypeCarouselProps) => {
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

export const PodcastList = () => {
  // const dispatch = useAppDispatch()
  const PODCAST_TYPE = useAppSelector(state => state.podcastList.podcastTypes)
  const { data } = useGetPodcastList(1, 10)
  const renderItem = ({ item }: { item: IPodcastTypes }) => {
    return (
      <PodcastTypeCarousel
        item={item}
        onPress={() => console.warn(JSON.stringify(item))}
      />
    )
  }
  return (
    <VStack space={2} safeAreaY={2} bgColor={'white'}>
      <VStack bgColor={'white'} safeAreaY={2} space={4}>
        <HStack
          safeAreaX={4}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Heading
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={600}
            color={'#000000'}>
            Podcast
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
          data={PODCAST_TYPE}
          renderItem={renderItem}
        />
      </VStack>
      <ScrollView>
        <VStack height={'400px'} safeAreaX={4} space={5}>
          {data?.data?.items?.map((item: any, index: number) => (
            <Pressable
              key={index}
              borderColor="#E6E6E6"
              borderWidth={'1px'}
              borderRadius={'12px'}
              p={3}>
              <HStack space={4} alignItems={'center'}>
                <Image
                  source={item.audioThumbnail?.thumbnailId}
                  width={'101px'}
                  height={'100px'}
                  borderRadius={'10px'}
                />
                <VStack space={1.5} width={'60%'}>
                  <Heading
                    fontStyle={'normal'}
                    fontSize={'16px'}
                    fontWeight={400}
                    lineHeight={'22px'}
                    color={'#161719'}>
                    {item.title}
                  </Heading>
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'19px'}
                    color={'#999999'}>
                    {item.desc}
                  </Text>
                  <HStack justifyContent={'flex-start'} alignItems={'center'}>
                    <HStack space={0.5} alignItems={'center'}>
                      <MaterialCommunityIcons
                        name="clock-time-three-outline"
                        size={15}
                        color={'#3D9BE0'}
                      />
                      <Text
                        fontStyle={'normal'}
                        fontSize={'10px'}
                        fontWeight={400}
                        color={'#666666'}>
                        01:30
                      </Text>
                    </HStack>
                    <Entypo name="dot-single" size={15} color={'#999999'} />
                    <Text
                      fontStyle={'normal'}
                      fontSize={'10px'}
                      fontWeight={400}
                      color={'#999999'}>
                      Dev Taodzo
                    </Text>
                    <Entypo name="dot-single" size={15} color={'#999999'} />
                    <Text
                      fontStyle={'normal'}
                      fontSize={'10px'}
                      fontWeight={400}
                      color={'#999999'}>
                      {item.audiosToTopics?.map(
                        (topic: IAudioTopicItem) => topic?.topicKey,
                      )}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
    </VStack>
  )
}
