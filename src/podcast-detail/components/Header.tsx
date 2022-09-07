import { Box, Flex, Icon } from 'native-base';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { PodcastDetailProps } from '../interface';
import { SliderAudio } from './SliderAudio';
import { SettingModal } from './SettingModal';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { userIsGoingBack } from '../reducer/podcastDetail';

export const Header = ({ navigation }: PodcastDetailProps) => {
  const [displaySliderAudio, setDisplaySliderAudio] = useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

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
