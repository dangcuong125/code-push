import { Box, Flex, Icon } from 'native-base';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { PodcastDetailProps } from '../interface';
import { SliderAudio } from './SliderAudio';
import { SettingModal } from './SettingModal';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { getIsSaveAudio, userIsGoingBack } from '../reducer/podcastDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useSavePodcast } from '../hooks/useSavePodcast';
import { useRoute } from '@react-navigation/native';
import {
  MediaType,
  USER_PROCESS_TOTAL,
} from '@clvtube/common/constants/common.constants';
import { useDeletePodcast } from '../hooks/useDeletePodcast';

export const Header = ({ navigation }: PodcastDetailProps) => {
  const [displaySliderAudio, setDisplaySliderAudio] = useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useRoute().params;

  const position = useAppSelector(state => state.podcastDetail.position);
  const duration = useAppSelector(state => state.podcastDetail.duration);

  const isSaveAudio = useAppSelector(getIsSaveAudio);
  const { mutate: savePod } = useSavePodcast();
  const { mutate: deletePod } = useDeletePodcast();

  const savePodcast = () => {
    savePod({
      audioId: id,
      mediaType: MediaType.AUDIO,
      startTime: (position / duration) * USER_PROCESS_TOTAL,
    });
  };

  const deletePodcast = () => {
    if (isSaveAudio) deletePod([isSaveAudio]);
  };

  return (
    <Box>
      <Flex direction="row" justifyContent="space-between" marginTop={2}>
        <Icon
          size="6"
          color="text.200"
          onPress={() => {
            navigation.goBack();
            dispatch(userIsGoingBack());
          }}
          as={AntDesign}
          name="arrowleft"
          marginLeft="23px"
        />
        <Flex direction="row">
          <Icon
            as={Feather}
            name="headphones"
            size="6"
            onPress={() => setDisplaySliderAudio(!displaySliderAudio)}
            color="text.200"
            marginRight="10px"
          />
          {isSaveAudio ? (
            <Box onTouchEnd={deletePodcast}>
              <Icon
                size="6"
                as={Ionicons}
                name="bookmarks"
                marginRight="10px"
                color="black"
              />
            </Box>
          ) : (
            <Box onTouchEnd={savePodcast}>
              <Icon
                size="6"
                as={Ionicons}
                name="bookmarks-outline"
                marginRight="10px"
                color="black"
              />
            </Box>
          )}

          <Icon
            as={AntDesign}
            name="setting"
            onPress={() => {
              setOpen(true);
            }}
            size="6"
            color="text.200"
            marginRight="25px"
          />
          <SettingModal open={open} setOpen={setOpen} />
        </Flex>
      </Flex>
      <SliderAudio displaySliderAudio={displaySliderAudio} />
    </Box>
  );
};
