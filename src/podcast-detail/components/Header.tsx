/* eslint-disable multiline-ternary */
/* eslint-disable react/display-name */
import { Box, Flex, Icon, useDisclose } from 'native-base';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { IPodcastDetail, PodcastDetailProps } from '../interface';
import { SliderAudio } from './SliderAudio';
import { SettingModal } from './SettingModal';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  saveNewAudio,
  // getIsSaveAudio,
  // saveNewAudio,
  userIsGoingBack,
} from '../reducer/podcastDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { useSavePodcast } from '../hooks/useSavePodcast';
import { useDeletePodcast } from '../hooks/useDeletePodcast';

interface HeadeProps {
  navigation: PodcastDetailProps;
  data: IPodcastDetail | undefined;
}

export const Header = React.memo(({ navigation, data }: HeadeProps) => {
  const [displaySliderAudio, setDisplaySliderAudio] = useState(true);
  const {
    isOpen: isOpenSettingModal,
    onOpen: openSettingModal,
    onClose: closeSettingModal,
  } = useDisclose();
  const dispatch = useAppDispatch();
  const savedPodcastInfo = useAppSelector(
    state => state.podcastDetail.podcastSaveInfo,
  );

  const isSaveAudio = data?.data?.userToMedia;

  const { mutate: savePod } = useSavePodcast();
  const { mutate: deletePod } = useDeletePodcast();

  const savePodcast = () => {
    dispatch(saveNewAudio());
    savePod(savedPodcastInfo);
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
              openSettingModal();
            }}
            size="6"
            color="text.200"
            marginRight="25px"
          />
          {isOpenSettingModal && (
            <SettingModal
              isOpen={isOpenSettingModal}
              onClose={closeSettingModal}
            />
          )}
        </Flex>
      </Flex>
      <SliderAudio displaySliderAudio={displaySliderAudio} />
    </Box>
  );
});
