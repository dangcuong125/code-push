/* eslint-disable no-nested-ternary */
/* eslint-disable multiline-ternary */
/* eslint-disable array-callback-return */
import { PROCESS } from '@clvtube/common/constants/common.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { Box, Image, Skeleton, Text } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Platform } from 'react-native';
import TrackPlayer, {
  Capability,
  useProgress,
} from 'react-native-track-player';
import { useGetPodcastDetail } from '../hooks/useGetPodcastDetail';
import {
  IPodcastDetail,
  ITranscriptItem,
  PodcastDetailProps,
} from '../interface';
import {
  getDurations,
  getLoadingState,
  getPosition,
  getPositionAndStartTime,
  setIsSaveAudio,
} from '../reducer/podcastDetail';
import { Transcripts } from './Transcripts';

const isIOS = Platform.OS === 'ios';

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

const PodcastDetailLearning = React.memo(function PodcastDetailLearning({
  navigation,
}: PodcastDetailProps) {
  const dispatch = useAppDispatch();
  const ref = useRef<FlatList>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const { id } = useRoute().params;

  const heightOfParagraph = useAppSelector(
    state => state.podcastDetail.heightOfParagraph,
  );

  const { data, isLoading, error } = useGetPodcastDetail(id);

  const podcastDetail = data?.data;

  const duration = useProgress(300).duration;
  const position = useProgress(300).position;
  const position1 = useProgress().position;
  useEffect(() => {
    if (data?.data?.userToMedia && duration) {
      dispatch(setIsSaveAudio(data?.data?.userToMedia));
    } else {
      dispatch(setIsSaveAudio(0));
    }
  }, [data?.data?.userToMedia, duration]);

  useEffect(() => {
    if (duration) {
      TrackPlayer.seekTo((data?.data?.startTime * duration) / PROCESS);
    }
  }, [data?.data?.startTime, duration]);

  const podcastTrack = {
    url: podcastDetail?.audioThumbnail?.file?.url,
    title: podcastDetail?.title,
    artist: 'Gutenburg',
    artwork: podcastDetail?.thumbnail?.url,
  };
  if (error) {
    Alert.alert('Error', 'Oops, something went wrong', [
      {
        text: 'Ok',
        onPress: () => navigation.goBack(),
        style: 'cancel',
      },
    ]);
  }

  const setUpPlayer = async () => {
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    });
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
  const resetAudio = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();
    // await TrackPlayer.stop();
  };

  // const tokenApp = useAppSelector(state => state.authReducer.tokenApp);
  const recentVideoAndPodcast = useAppSelector(
    state => state.homePage.saveRecentVideoAndPodcast,
  );
  // console.log('test', recentVideoAndPodcast);

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
        position={isIOS ? position : 0} // disable auto scroll on android because of performance issues
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
  }, [podcastTrack]);
  useEffect(() => {
    resetAudio();
    return () => {
      TrackPlayer.destroy();
    };
  }, []);
  useEffect(() => {
    dispatch(getLoadingState(isLoading));
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Skeleton.Text px="4" h="40" />
      ) : (
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
      )}
    </>
  );
});
export default PodcastDetailLearning;
