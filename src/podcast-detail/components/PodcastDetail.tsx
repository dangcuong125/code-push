/* eslint-disable multiline-ternary */
/* eslint-disable array-callback-return */
import { Box, Image, Text } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { useGetPodcastDetail } from '../hooks/useGetPodcastDetail';
import {
  IPodcastDetail,
  ITranscriptContent,
  ITranscriptItem,
} from '../interface';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getDurations, getPosition } from '../reducer/podcastDetail';

const Transcripts = React.memo(function Transcripts({
  item,
  position,
}: {
  item: ITranscriptContent[];
  position: number;
}) {
  const width = Dimensions.get('window').width;
  return (
    <Box
      marginTop="8px"
      marginLeft="16px"
      width={width - 32}
      flexDirection={'row'}
      flexWrap="wrap"
      fontWeight={400}
      fontSize="14px">
      {item?.map((word: ITranscriptContent, index: number) => {
        const displayHighlightText =
          Number(word.start_time) < position + 0.5 &&
          Number(word.start_time) > position - 0.5;
        return (
          <Text key={index}>
            <Text color={displayHighlightText ? 'primary.100' : 'text.100'}>
              {word?.content}{' '}
            </Text>
          </Text>
        );
      })}
    </Box>
  );
});

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

const PodcastDetailLearning = React.memo(function PodcastDetailLearning() {
  const dispatch = useAppDispatch();
  const ref = useRef<FlatList>(null);
  const [currentPosition, setCurrentPosition] = useState(1);

  const { data } = useGetPodcastDetail(12);
  const podcastDetail = data?.data;

  const duration = useProgress().duration;
  const position = useProgress().position;

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
  const sortedParagraphList = podcastDetail?.audioTranscripts?.sort(
    (a: ITranscriptItem, b: ITranscriptItem) => {
      return Number(a.startTime) - Number(b.startTime);
    },
  );
  const transcriptWords = sortedParagraphList?.map((item: ITranscriptItem) => {
    return item?.content;
  });
  const renderItem = ({ item }: { item: ITranscriptContent[] }) => {
    return <Transcripts item={item} position={position} />;
  };
  const itemHasStartTimeGreaterThanPosition =
    podcastDetail?.audioTranscripts?.find((item: ITranscriptItem) => {
      return Number(item.startTime) > position;
    });

  useEffect(() => {
    dispatch(getDurations(duration));
  }, [duration]);
  useEffect(() => {
    dispatch(getPosition(position));
    ref?.current?.scrollToOffset({
      offset:
        Math.ceil(Number(itemHasStartTimeGreaterThanPosition?.startTime)) ===
        Math.ceil(position)
          ? currentPosition + 100
          : currentPosition,
      animated: true,
    });
  }, [position]);
  useEffect(() => {
    if (podcastDetail) setUpPlayer();
  }, [podcastDetail]);
  return (
    <>
      <FlatList
        ref={ref}
        onScroll={event => {
          setCurrentPosition(event.nativeEvent.contentOffset.y);
        }}
        data={transcriptWords}
        ListHeaderComponent={<HeaderPodcast podcastDetail={podcastDetail} />}
        renderItem={renderItem}
      />
    </>
  );
});
export default PodcastDetailLearning;
