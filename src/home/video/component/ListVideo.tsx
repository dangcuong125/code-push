import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Box,
  Button,
  // Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from 'native-base';

import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useGetAllTopics } from '@clvtube/common/hooks/useGetAllTopics';
import {
  IVideoListCarousel,
  IVideoTypeCarousel,
  IVideoTypeCarouselProps,
} from '../interface';
import {
  receiveTopicsVideo,
  selectOnlyOneTypeVideo,
} from '../reducer/videoList';
import { useGetVideoList } from '@clvtube/common/hooks/useGetVideoList';
import { useTranslation } from 'react-i18next';

const VideoTypeCarousel = ({ item, onPress }: IVideoTypeCarouselProps) => {
  return (
    <Button
      height={'27px'}
      lineHeight={'27px'}
      px={2}
      marginLeft={4}
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

const VideoListCarousel = ({ item, t }: { item: any; t: any }) => {
  return (
    <Box
      mt={4}
      ml={4}
      width={'272px'}
      px={4}
      py={2}
      marginRight={2}
      bgColor={'white'}
      borderRadius="12px">
      <Box>
        <Flex>
          <Image
            source={{ uri: item?.thumbnails.medium.url }}
            resizeMode="contain"
            width={item?.thumbnails.medium.width}
            height={item?.thumbnails.medium.height}
            alt=""
          />
          <Text
            fontStyle={'normal'}
            textAlign={'center'}
            fontSize="16px"
            fontWeight={600}
            color={'#1A1A1A'}>
            {item.name}
          </Text>
          <Text
            fontStyle={'normal'}
            fontSize={'14px'}
            textAlign={'center'}
            fontWeight={400}
            lineHeight={'19px'}
            marginTop="8px"
            color={'#1A1A1A'}>
            {item.desc}
          </Text>
          <Button
            marginTop="16px"
            width="120px"
            height="40px"
            margin="auto"
            bgColor={'text.500'}>
            {t('start')}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const ListVideo = () => {
  const [topicKey, setTopicKey] = useState('');
  const { t } = useTranslation();
  const { data } = useGetAllTopics('en', 1, 100);
  const { data: videos } = useGetVideoList(topicKey, 1, 100);
  const videoListCarousel = videos?.data?.items;
  const videoTypeCarousel = useAppSelector(
    state => state.videoList.videoTopics,
  );
  const dispatch = useAppDispatch();

  const renderVideoTypeCarousel = ({ item }: { item: IVideoTypeCarousel }) => {
    const onPress = () => {
      setTopicKey(item.key);
      dispatch(selectOnlyOneTypeVideo(item.key));
    };
    return <VideoTypeCarousel item={item} onPress={onPress} />;
  };

  const renderVideoListCarousel = ({ item }: { item: IVideoListCarousel }) => {
    return <VideoListCarousel item={item} t={t} />;
  };

  useEffect(() => {
    dispatch(receiveTopicsVideo(data?.data?.items));
  }, [data?.data?.items]);

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
            Danh sách video
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
  );
};

export default ListVideo;
