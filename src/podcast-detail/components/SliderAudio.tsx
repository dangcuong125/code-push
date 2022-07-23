import { Box, Flex, Icon, Text } from 'native-base';
import React from 'react';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { formatTimePlayer } from '@clvtube/common/lib/common.lib';
import TrackPlayer, {
  State,
  usePlaybackState,
  // useProgress,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SliderAudio = ({
  displaySliderAudio,
}: {
  displaySliderAudio: boolean;
}) => {
  // const { duration } = useProgress(300);
  const duration = useAppSelector(state => state.podcastDetail.duration);
  const position = useAppSelector(state => state.podcastDetail.position);

  const positionConverted = formatTimePlayer(position);
  const durationConverted = formatTimePlayer(duration);
  const playBackState = usePlaybackState();

  const togglePlayback = async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Ready) await TrackPlayer.play();
    if (state === State.Paused) await TrackPlayer.play();
    else if (state === State.Playing) await TrackPlayer.pause();
  };
  return (
    <Box margin="auto">
      {displaySliderAudio && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          direction="row">
          <Icon
            as={AntDesign}
            name={
              playBackState === State.Playing ? 'pausecircleo' : 'playcircleo'
            }
            onPress={togglePlayback}
            size="5"
            color="text.100"
          />
          <Text marginLeft="5px" color="text.100" width="33px">
            {positionConverted}
          </Text>
          <Slider
            style={{ width: 232 }}
            value={position}
            maximumTrackTintColor="#999999"
            minimumTrackTintColor="#1A1A1A"
            thumbTintColor="#1A1A1A"
            minimumValue={0}
            maximumValue={duration}
            onSlidingComplete={async e => await TrackPlayer.seekTo(e)}
          />
          <Text marginLeft="8px" color="text.100">
            {durationConverted}
          </Text>
        </Flex>
      )}
    </Box>
  );
};
