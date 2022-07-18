/* eslint-disable no-nested-ternary */
/* eslint-disable multiline-ternary */
/* eslint-disable array-callback-return */
import { Box, Image, Text } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { useGetPodcastDetail } from '../hooks/useGetPodcastDetail';
import { IPodcastDetail, ITranscriptItem } from '../interface';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  getDurations,
  getPosition,
  getPositionAndStartTime,
} from '../reducer/podcastDetail';
import { useRoute } from '@react-navigation/native';
import { Transcripts } from './Transcripts';

// eslint-disable-next-line react/display-name
export const Word = React.memo(
  ({
    displayHighlightText,
    word,
    position,
  }: {
    displayHighlightText: boolean;
    word: string;
    position: number;
  }) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const colorText = fadeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000000', '#3D9BE0'],
    });
    const sliderValue = useAppSelector(
      state => state.podcastDetail.sliderValue,
    );
    let fontSize = 14;
    if (sliderValue >= 70) fontSize = 18;
    if (sliderValue < 70 && sliderValue > 50) fontSize = 16;
    if (sliderValue < 50) fontSize = 14;

    useEffect(() => {
      Animated.timing(fadeAnimation, {
        toValue: displayHighlightText ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [position]);
    return (
      <Animated.Text
        style={{
          color: colorText,
          height: 25,
          fontSize,
        }}>
        {word}{' '}
      </Animated.Text>
    );
  },
  (prev, next) => {
    return !(
      prev.displayHighlightText !== next.displayHighlightText ||
      prev.word !== next.word
    );
  },
);

const HeaderPodcast = React.memo(function HeaderPodcast({
  podcastDetail,
}: {
  podcastDetail: IPodcastDetail;
}) {
  return (
    <Box marginTop="31px">
      <Text
        color="text.100"
        textAlign="center"
        fontWeight={600}
        fontSize="20px">
        {podcastDetail?.title}
      </Text>
      <Text
        color="text.100"
        textAlign="center"
        fontWeight={400}
        fontSize="14px">
        Authors
      </Text>
      <Image
        source={{ uri: podcastDetail?.audioThumbnail?.thumbnail?.url }}
        margin="auto"
        alt=""
        marginTop="8px"
        width="162px"
        height="126px"
      />
    </Box>
  );
});
const FooterPodcast = React.memo(function FooterPodcast() {
  return <Box height="200px"></Box>;
});

const PodcastDetailLearning = React.memo(function PodcastDetailLearning() {
  const dispatch = useAppDispatch();
  const ref = useRef<FlatList>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const { id } = useRoute().params;

  const heightOfParagraph = useAppSelector(
    state => state.podcastDetail.heightOfParagraph,
  );

  const { data } = useGetPodcastDetail(id);
  const podcastDetail = data?.data;

  const duration = useProgress(300).duration;
  const position = useProgress(300).position;
  const position1 = useProgress().position;

  const podcastTrack = {
    url: podcastDetail?.audioThumbnail?.file?.url,
    title: podcastDetail?.title,
    artist: 'Gutenburg',
    artwork: podcastDetail?.thumbnail?.url,
  };

  const setUpPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add([podcastTrack]);
  };
  // const paragraphInfo = useAppSelector(state => state?.podcastDetail?.paragraphInfo);

  // const paragraphHasOffsetEqualToPosition = paragraphInfo?.find(item => {
  //   return item?.offset === currentPosition;
  // });
  const transcriptWords = podcastDetail?.audioTranscripts?.map(
    (item: ITranscriptItem) => {
      return item;
    },
  );
  const renderItem = ({
    item,
    index,
  }: {
    item: ITranscriptItem;
    index: number;
  }) => {
    return (
      <Transcripts
        array={podcastDetail?.audioTranscripts}
        item={item}
        position={position}
        index={index}
      />
    );
  };
  const startTimeOfParagraphGreaterThanPosition =
    podcastDetail?.audioTranscripts?.find(
      (item: ITranscriptItem) => Number(item.startTime) > position,
    );
  const autoScrollWhenMoveToNewParagraph =
    Math.ceil(Number(startTimeOfParagraphGreaterThanPosition?.startTime)) -
      Math.ceil(position1) <
    0.99;

  useEffect(() => {
    dispatch(getDurations(duration));
  }, [duration]);
  useEffect(() => {
    dispatch(getPosition(position1));
    ref?.current?.scrollToOffset({
      offset: autoScrollWhenMoveToNewParagraph
        ? currentPosition + Number(heightOfParagraph)
        : currentPosition,
    });
    if (
      autoScrollWhenMoveToNewParagraph &&
      Math.ceil(Number(startTimeOfParagraphGreaterThanPosition?.startTime)) ===
        Math.ceil(position1)
    ) {
      dispatch(
        getPositionAndStartTime({
          offset: currentPosition + Number(heightOfParagraph),
          startTime: startTimeOfParagraphGreaterThanPosition?.startTime,
        }),
      );
    }
    // if (currentPosition !== paragraphHasOffsetEqualToPosition?.offset) {
    //   ref?.current?.scrollToOffset({
    //     offset: paragraphHasOffsetEqualToPosition?.offset,
    //   });
    // }
  }, [position1]);
  useEffect(() => {
    if (podcastDetail) setUpPlayer();
  }, [podcastDetail]);
  return (
    <>
      <FlatList
        ref={ref}
        data={transcriptWords}
        onScroll={e => {
          setCurrentPosition(e.nativeEvent.contentOffset.y);
        }}
        ListFooterComponent={FooterPodcast}
        ListHeaderComponent={<HeaderPodcast podcastDetail={podcastDetail} />}
        renderItem={renderItem}
      />
    </>
  );
});
export default PodcastDetailLearning;
