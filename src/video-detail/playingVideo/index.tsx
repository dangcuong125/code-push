import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, VStack } from 'native-base';
import { useGetVideoItem } from '../../common/hooks/useVideos';
import IconHeader from './component/IconHeader';
import YoutubeVideo from './component/YoutubeVideo';
import ListVideo from '../../home/video/component/ListVideo';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { updateVideoItem } from './slice';
import { useAppSelector } from '../../common/hooks/useAppSelector';

const PlayingVideo = () => {
  const scrollViewRef = useRef();
  const { id } = useRoute().params;

  const { videoItem } = useAppSelector(state => state.videoItemReducer);

  const dispatch = useAppDispatch();

  const [paramsVideo, setParamsVideo] = useState(() => id);
  const { data } = useGetVideoItem(paramsVideo);

  useEffect(() => {
    setParamsVideo(id);
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, [id]);

  useEffect(() => {
    dispatch(updateVideoItem(data?.data));
  }, [data?.data]);

  return (
    <ScrollView
      ref={scrollViewRef}
    >
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
