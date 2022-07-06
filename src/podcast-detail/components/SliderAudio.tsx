import { Flex, Icon, Text } from 'native-base';
import React from 'react';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { formatTimePlayer } from '@clvtube/common/lib/common.lib';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SliderAudio = ({
  displaySliderAudio,
}: {
  displaySliderAudio: boolean;
}) => {
  const playbackState = usePlaybackState();
  const duration = useAppSelector(state => state.podcastDetail.duration);
  const position = useAppSelector(state => state.podcastDetail.position);
  const positionConverted = formatTimePlayer(position);
  const durationConverted = formatTimePlayer(duration);
  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playbackState === State.Paused) await TrackPlayer.play();
      else await TrackPlayer.pause();
    }
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      direction="row"
      w={'100px'}
      marginLeft="5px"
      display={displaySliderAudio ? '' : 'none'}>
      <Icon
        as={AntDesign}
        name={playbackState === State.Playing ? 'pausecircleo' : 'playcircleo'}
        onPress={togglePlayback}
        size="5"
        color="text.100"
      />
      <Text marginLeft="5px" color="text.100" width="33px">
        {positionConverted}
      </Text>
      <Slider
        style={{ width: 290 }}
        value={position}
        maximumTrackTintColor="#999999"
        minimumTrackTintColor="#1A1A1A"
        thumbTintColor="#1A1A1A"
        minimumValue={0}
        maximumValue={duration}
        onSlidingComplete={async e => await TrackPlayer.seekTo(e)}
      />
      <Text color="text.100">{durationConverted}</Text>
    </Flex>
  );
};
