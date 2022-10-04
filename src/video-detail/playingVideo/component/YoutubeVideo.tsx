import { HStack, Text, VStack } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-native-youtube';

import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  getDuration,
  getPosition,
  getStartTime,
  setDuration,
  setPosition,
} from '../slice';
import { PROCESS } from '@clvtube/common/constants/common.constants';

const YoutubeVideo = ({ videoPlay, id }: any) => {
  // const [startTime, setStartTime] = useState(0);
  const youtubeRef = useRef<YouTube>(null);

  const startTime = useAppSelector(getStartTime);
  const position = useAppSelector(getPosition);
  const duration = useAppSelector(getDuration);

  const dispatch = useAppDispatch();

  const oneIndex = videoPlay?.videoTranscripts?.find(
    (item, index) => index === 0,
  );

  const [transcript, setTranscript] = useState(oneIndex);

  useEffect(() => {
    const itemDisplay = videoPlay?.videoTranscripts?.find(
      item =>
        position - 500 < item.startTime && item.startTime < position + 500,
    );
    if (itemDisplay) {
      setTranscript(itemDisplay);
    }
  }, [position]);
  useEffect(() => {
    if (startTime && duration) {
      youtubeRef.current?.seekTo((startTime * duration) / PROCESS);
    }
  }, [startTime, duration]);
  youtubeRef?.current?.getDuration().then(value => {
    dispatch(setDuration(value));
  });

  useEffect(() => {
    dispatch(setPosition(0));
    setTranscript('');
  }, [id]);

  return (
    <VStack>
      <YouTube
        ref={youtubeRef}
        apiKey="react native"
        videoId={videoPlay?.videoCode}
        play={true}
        fullscreen={false}
        onProgress={e => dispatch(setPosition(e.currentTime * 1000))}
        style={{
          height: 250,
        }}
      />
      <VStack
        margin={4}
        safeArea={3}
        borderWidth={0.5}
        borderColor={'#999999'}
        borderRadius={8}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={2}>
            {/* <Badge
              borderRadius={10}
              colorSchema={'#F4F4F4'}
              _text={{
                fontStyle: 'normal',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '19px',
              }}>
              0.75x
            </Badge>
            <Badge borderRadius={10} colorSchema={'#F4F4F4'} paddingX={8}>
              <Octicons name="arrow-switch" size={20} color={'#B3B3B3'} />
            </Badge> */}
          </HStack>
          <MaterialIcons name="filter-none" size={25} color="black" />
        </HStack>
        <HStack
          safeAreaY={12}
          justifyContent={'space-between'}
          alignItems={'center'}
          height={'180px'}
          space={3}>
          {/* <MaterialIcons
            name="keyboard-arrow-left"
            size={20}
            color="#999999"
          /> */}
          <Text
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={600}
            textAlign={'center'}
            textDecorationLine={'underline'}
            textDecorationColor={'#999999'}
            color={'neural.10'}
            flex={1}>
            {transcript && transcript?.content}
          </Text>
          {/* <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color="#999999"
          /> */}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default YoutubeVideo;
