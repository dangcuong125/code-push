/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from 'native-base';

import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { receiveTopicsVideo, selectOnlyOneTypeVideo } from '../redux/homePage';

import {
  // IVideoListCarousel,
  IVideoTypeCarousel,
  VideoTypeCarouselProps,
} from '../interfaces';

import { useGetAllTopics } from '@clvtube/common/hooks/useGetAllTopics';
import { useGetVideoList } from '@clvtube/common/hooks/useGetVideoList';

import { useTranslation } from 'react-i18next';

const VideoTypeCarousel = ({ item, onPress }: VideoTypeCarouselProps) => {
  return (
    <Button
      height={'27px'}
      lineHeight={'27px'}
      px={2}
      marginLeft={3}
      variant="outline"
      borderColor="#3D9BE0"
      bgColor={item.bgColor || '#FFFFFF'}
      onPress={onPress}
      _text={{
        color: item.color || '#3D9BE0',
        fontStyle: 'normal',
        height: '20px',
        fontWeight: 400,
      }}>
      {item.description}
    </Button>
  );
};

export const VideoList = () => {
  const { t } = useTranslation();
  const [topicKey, setTopicKey] = useState('');
  const { data } = useGetAllTopics('en', 1, 100);
  const { data: videos } = useGetVideoList(topicKey, 1, 100);
  const videoListCarousel = videos?.data?.items;

  const videoTypeCarousel = useAppSelector(
    state => state.homePage.videoTypeCarousel,
  );
  const dispatch = useAppDispatch();

  const renderVideoTypeCarousel = ({ item }: { item: IVideoTypeCarousel }) => {
    return (
      <VideoTypeCarousel
        onPress={() => {
          setTopicKey(item.key);
          dispatch(selectOnlyOneTypeVideo(item.key));
        }}
        item={item}
      />
    );
  };

  useEffect(() => {
    dispatch(receiveTopicsVideo(data?.data?.items));
  }, [data?.data?.items]);

  const isHorizontal = true;

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
            {t('viewAll')}
          </Text>
        </HStack>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={videoTypeCarousel}
          renderItem={renderVideoTypeCarousel}
        />
        <ScrollView
          horizontal={
            videoListCarousel?.length > 0 ? isHorizontal : !isHorizontal
          }>
          <VStack safeAreaX={4} space={5}>
            {videoListCarousel?.length === 0 ? (
              <Text textAlign="center" color="text.200">
                {t('alertNoVideo')}
              </Text>
            ) : (
              videoListCarousel?.map((video: any, index: number) => (
                <Box
                  mt={4}
                  width={'222px'}
                  key={index}
                  px={4}
                  py={2}
                  marginRight={5}
                  bgColor={'white'}
                  borderRadius="12px">
                  <Center>
                    <Text
                      fontStyle={'normal'}
                      fontSize="16px"
                      fontWeight={400}
                      color={'#1A1A1A'}
                      lineHeight={'22px'}>
                      {video.name}
                    </Text>
                    <Image
                      source={{ uri: video?.thumbnails?.medium?.url }}
                      resizeMode="contain"
                      width={video?.thumbnails.medium.width}
                      height={video?.thumbnails.medium.height}
                      alt=""
                    />
                    <Text
                      fontStyle={'normal'}
                      fontSize={'14px'}
                      fontWeight={400}
                      lineHeight={'19px'}
                      color={'#1A1A1A'}>
                      {video.desc}
                    </Text>
                  </Center>
                </Box>
              ))
            )}
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
};
