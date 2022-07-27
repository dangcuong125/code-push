import { Alert, Center, HStack, Heading, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';

import ButtonTopic from '@clvtube/common/components/buttonTopic';

import { useGetAllVideos } from '@clvtube/common/hooks/useVideos';
import { useNavigation } from '@react-navigation/native';
import { selectTopic, updateTopicsData, updateVideosData } from '../slice';

import { useGetAllTopics } from '@clvtube/level-topic/hooks/useTopic';
import VideoItem from '../../../common/components/video-item/index';
import { VIDEO_ROUTE } from '../../../common/constants/route.constants';

const ListVideo = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation();
  const [topicPicking, setTopicPicking] = useState([]);

  const { topics, videos } = useAppSelector(state => state.videoReducer);

  console.log({ videos });

  const { data: topicsData } = useGetAllTopics();
  const { data: videosData } = useGetAllVideos('', topicPicking, 1, 100);

  // useEffect(() => {
  //   if (pickingTopic !== 'All') {
  //     // Alert.alert('Bạn không thể lấy API rồi!');
  //   }
  // }, [pickingTopic]);

  // useEffect(() => {
  //   dispatch(updateDataTopic(topicData?.data?.items));
  // }, [topicData?.data?.items]);

  useEffect(() => {
    dispatch(updateTopicsData(topicsData?.data.items));
  }, [topicsData?.data.items]);

  useEffect(() => {
    dispatch(updateVideosData(videosData?.data.items));
  }, [videosData?.data.items]);

  const handlePickingTopic = (key: string) => {
    dispatch(selectTopic(key));
    setTopicPicking([key]);
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
        showsHorizontalScrollIndicator={false}
        data={topics}
        renderItem={({ item }) =>
        <ButtonTopic
            item={item}
            handlePickingTopic={handlePickingTopic}
        />
      }
      />
      {
        videos && (
          <FlatList
            horizontal={true}
            data={videos}
            renderItem={({ item }) => {
              return <VideoItem item={item} />;
            }}
          />
        )
      }
      {
        videos?.length === 0 && (
          <Center>
            <Alert w="90%" maxW="400" status="info" colorScheme="info">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                      Topic hiện chưa có video để học tập
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Alert>
          </Center>
        )
      }
    </VStack>
  );
};

export default ListVideo;
