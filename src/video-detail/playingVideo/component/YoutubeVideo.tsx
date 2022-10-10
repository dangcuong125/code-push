import { Box, HStack, Text, useDisclose, VStack } from 'native-base';
import React, { useEffect, useRef } from 'react';
import YouTube from 'react-native-youtube';

import { WordDefinition } from '@clvtube/common/components/word-definition/index';
import {
  MILLISECONDS_HIGHLIGHT,
  USER_PROCESS_TOTAL,
} from '@clvtube/common/constants/common.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { getContentOfWord } from '@clvtube/save-new-word/reducer/saveNewWord';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { IVideoTranscript, IWord } from '../interface';
import {
  customVideoItemConverted,
  findWordIsClickedForDisplayDefinition,
  getDuration,
  getPosition,
  getStartTime,
  getWordIsClicked,
  setDuration,
  setIsSaveVideo,
  setPosition,
  setStartTime,
} from '../slice';

const YoutubeVideo = ({ videoPlay, id }: any) => {
  // const [startTime, setStartTime] = useState(0);
  const youtubeRef = useRef<YouTube>(null);
  const { isOpen, onClose, onOpen } = useDisclose();

  const startTime = useAppSelector(getStartTime);
  const position = useAppSelector(getPosition);
  const duration = useAppSelector(getDuration);
  const sentenceConvertedToWords = useAppSelector(
    state => state.videoItemReducer.videoItemIsConverted,
  );
  const wordIsClicked = useAppSelector(
    state => state.videoItemReducer.wordIsClicked,
  );
  const wordDefinition = useAppSelector(
    state => state.videoItemReducer.wordDefinition,
  );

  const dispatch = useAppDispatch();

  const oneIndex = videoPlay?.videoTranscripts?.find(
    (item: IVideoTranscript, index: number) => index === 0,
  );
  const videoItemConverted = oneIndex?.content?.split(' ');

  useEffect(() => {
    const itemDisplay = videoPlay?.videoTranscripts?.find(
      (item: IVideoTranscript) =>
        position - MILLISECONDS_HIGHLIGHT < item.startTime &&
        item.startTime < position + MILLISECONDS_HIGHLIGHT,
    );
    const sentenceInCertainTimeConverted = itemDisplay?.content?.split(' ');
    if (itemDisplay) {
      dispatch(customVideoItemConverted(sentenceInCertainTimeConverted));
    }
  }, [position]);
  useEffect(() => {
    if (startTime && duration) {
      youtubeRef.current?.seekTo((startTime * duration) / USER_PROCESS_TOTAL);
    }
  }, [startTime, duration]);
  useEffect(() => {
    return () => {
      dispatch(setStartTime(0));
      dispatch(setIsSaveVideo(0));
    };
  }, []);
  youtubeRef?.current?.getDuration().then(value => {
    dispatch(setDuration(value));
  });
  useEffect(() => {
    dispatch(customVideoItemConverted(videoItemConverted));
  }, [oneIndex]);

  useEffect(() => {
    dispatch(setPosition(0));
    dispatch(customVideoItemConverted([]));
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
          flexWrap={'wrap'}
          safeAreaY={12}
          justifyContent={'center'}
          alignItems={'center'}
          height={'180px'}
          space={3}>
          {/* <MaterialIcons
            name="keyboard-arrow-left"
            size={20}
            color="#999999"
          /> */}
          {sentenceConvertedToWords?.map((item: IWord, index: number) => (
            <Box key={index} height={'auto'}>
              <Text
                key={index}
                fontStyle={'normal'}
                fontSize={'18px'}
                fontWeight={600}
                flexBasis={'50%'}
                underline={item?.isHighlighted}
                onPress={() => {
                  if (item?.isHighlighted) {
                    dispatch(getWordIsClicked(item?.content));
                    dispatch(getContentOfWord(item?.content));
                    dispatch(
                      findWordIsClickedForDisplayDefinition(item?.content),
                    );
                    onOpen();
                  }
                }}
                textAlign={'center'}
                textDecorationColor={'#999999'}
                color={'neural.10'}>
                {item?.content}
              </Text>
            </Box>
          ))}
          {isOpen && (
            <WordDefinition
              content={wordIsClicked}
              isOpen={isOpen}
              onClose={onClose}
              wordDefinition={wordDefinition?.evDict?.detail}
            />
          )}
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
