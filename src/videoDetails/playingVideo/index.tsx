import { useRoute } from '@react-navigation/native';
import { ScrollView, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useGetVideoItem } from '../../common/hooks/useVideos';
import IconHeader from './component/IconHeader';
import YoutubeVideo from './component/YoutubeVideo';
import ListVideo from '../../home/video/component/ListVideo';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { updateVideoItem } from './slice';
import { useAppSelector } from '../../common/hooks/useAppSelector';

const PlayingVideo = () => {
  const { id } = useRoute().params;
  console.log({ id });

  const { videoItem } = useAppSelector(state => state.videoItemReducer);

  // const [a, ...rest] = videoItem.videoTranscripts;

  const dispatch = useAppDispatch();

  const [paramsVideo, setParamsVideo] = useState(() => id);
  const { data } = useGetVideoItem(paramsVideo);

  console.log({ video: data?.data });

  useEffect(() => {
    setParamsVideo(id);
  }, [id]);

  useEffect(() => {
    dispatch(updateVideoItem(data?.data));
    // dispatch(updateVideoTranscripts(data?.data.videoTranscripts));
  }, [data?.data]);

  return (
    <ScrollView>
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
