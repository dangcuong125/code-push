import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, VStack } from 'native-base';
import { useGetVideoItem } from '../../common/hooks/useVideos';
import IconHeader from './component/IconHeader';
import YoutubeVideo from './component/YoutubeVideo';
import ListVideo from '../../home/video/component/ListVideo';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { updateVideoItem } from './slice';
import { Alert } from 'react-native';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayingVideo = () => {
  const scrollViewRef = useRef();
  // const tokenApp = useAppSelector(state => state.authReducer.tokenApp);
  const { id } = useRoute().params;
  console.log({ id });
  const navigation = useNavigation();

  const { videoItem } = useAppSelector(state => state.videoItemReducer);

  const dispatch = useAppDispatch();

  const [paramsVideo, setParamsVideo] = useState(() => id);
  const { data, error } = useGetVideoItem(paramsVideo);
  const recentVideoAndPodcast = useAppSelector(
    state => state.homePage.saveRecentVideoAndPodcast,
  );
  console.log('test', recentVideoAndPodcast);

  const recentVideoAndPodcastWithoutDuplicate = [
    ...new Set(recentVideoAndPodcast),
  ].slice(0, 5);
  const storeRecentVideoAndPodcast = async () => {
    await AsyncStorage.setItem(
      'recentVideoAndPodcast',
      JSON.stringify(recentVideoAndPodcastWithoutDuplicate),
    );
  };
  if (data) storeRecentVideoAndPodcast();

  console.log({ video: data?.data });
  if (error) {
    Alert.alert('Error', 'Oops, something went wrong', [
      {
        text: 'Ok',
        onPress: () => navigation.goBack(),
        style: 'cancel',
      },
    ]);
  }

  useEffect(() => {
    setParamsVideo(id);
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, [id]);

  useEffect(() => {
    dispatch(updateVideoItem(data?.data));
  }, [data?.data]);

  return (
    <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
      <VStack bgColor={'#E5E5E5'} width={'100%'} height={'100%'}>
        <VStack
          space={2}
          overflow={'hidden'}
          safeAreaTop={12}
          backgroundColor={'white'}>
          <IconHeader />
          <YoutubeVideo videoPlay={videoItem} id={id} />
          <ListVideo />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default PlayingVideo;
