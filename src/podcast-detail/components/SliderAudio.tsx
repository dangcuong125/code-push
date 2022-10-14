import { Box, Flex, Icon, Text } from 'native-base';
import React, { useEffect } from 'react';
import { formatTimePlayer } from '@clvtube/common/lib/common.lib';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  colorizeTextWhenAudioRunning,
  getDurations,
  getPosition,
} from '../reducer/podcastDetail';

const togglePlayback = async () => {
  const state = await TrackPlayer.getState();

  if (state === State.Ready) await TrackPlayer.play();
  if (state === State.Paused) await TrackPlayer.play();
  else if (state === State.Playing) await TrackPlayer.pause();
};

export const SliderAudio = ({
  displaySliderAudio,
}: {
  displaySliderAudio: boolean;
}) => {
  const { position, duration } = useProgress(300);

  const positionConverted = formatTimePlayer(position);
  const durationConverted = formatTimePlayer(duration);
  const playBackState = usePlaybackState();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosition(position));
    dispatch(colorizeTextWhenAudioRunning());
  }, [position]);

  useEffect(() => {
    dispatch(getDurations(duration));
  }, [duration]);

  return (
    <Box margin="auto">
      {displaySliderAudio && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          marginY={2}
          direction="row">
          <Icon
            as={AntDesign}
            name={
              playBackState === State.Playing ? 'pausecircleo' : 'playcircleo'
            }
            onPress={togglePlayback}
            size="8"
            color="text.100"
          />
          <Text marginLeft="5px" color="text.100" width="33px">
            {positionConverted}
          </Text>
          <Slider
            style={{ width: 232 }}
            value={position}
            maximumTrackTintColor="#999999"
            minimumTrackTintColor="#216BCD"
            thumbTintColor="#216BCD"
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
