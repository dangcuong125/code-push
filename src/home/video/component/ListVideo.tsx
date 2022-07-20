import { HStack, Heading, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';

import ButtonTopic from '@clvtube/common/components/buttonTopic';
import {
  updateDataTopic,
  updateKeyPickingTopic,
} from '@clvtube/level-topic/slice';

import { useGetAllVideos } from '@clvtube/common/hooks/useVideos';
import { useNavigation } from '@react-navigation/native';
import { updateVideosData } from '../slice';

import { useGetAllTopics } from '@clvtube/level-topic/hooks/useTopic';
import VideoItem from '../../../common/components/video-item/index';
import { VIDEO_ROUTE } from '../../../common/constants/route.constants';

const ListVideo = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation();

  const { topic, pickingTopic } = useAppSelector(state => state.topicReducer);
  const { videos } = useAppSelector(state => state.videoReducer);
  // const { videos } = useAppSelector(state => state.videoReducer);

  const { data: topicData } = useGetAllTopics();
  const { data: videosData } = useGetAllVideos();

  // console.log({ topic: topicData?.data.items });
  // console.log({ video: videosData?.data.items });

  useEffect(() => {
    if (pickingTopic !== 'All') {
      // Alert.alert('Bạn không thể lấy API rồi!');
    }
  }, [pickingTopic]);

  useEffect(() => {
    dispatch(updateDataTopic(topicData?.data?.items));
  }, [topicData?.data?.items]);

  useEffect(() => {
    dispatch(updateVideosData(videosData?.data.items));
  }, [videosData?.data.items]);

  const handlePickingTopic = (item: any) => {
    dispatch(updateKeyPickingTopic(item));
  };

  return (
    <VStack bgColor={'white'} safeAreaY={4} space={4}>
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
        <TouchableOpacity
          onPress={() => navigator.navigate(VIDEO_ROUTE.VIDEO_LIST, {})}>
          <Text
            fontStyle={'normal'}
            fontSize={'12px'}
            fontWeight={400}
            color={'#216BCD'}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </HStack>
      <FlatList
        horizontal={true}
        data={topic}
        renderItem={({ item }) => (
          <ButtonTopic
            displayPickingTopic={pickingTopic}
            item={item}
            handlePickingTopic={handlePickingTopic}
          />
        )}
      />
      <FlatList
        horizontal={true}
        data={videos}
        renderItem={({ item }) => {
          return <VideoItem item={item} />;
        }}
      />
    </VStack>
  );
};

export default ListVideo;
