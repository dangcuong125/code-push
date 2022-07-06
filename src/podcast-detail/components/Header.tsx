import { Box, Flex, Icon } from 'native-base';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { PodcastDetailProps } from '../interface';
import { SliderAudio } from './SliderAudio';

export const Header = ({ navigation }: PodcastDetailProps) => {
  const [displaySliderAudio, setDisplaySliderAudio] = useState(false);
  return (
    <Box>
      <Flex direction="row" justifyContent="space-between">
        <Icon
          size="6"
          color="text.200"
          onPress={() => navigation.goBack()}
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
            size="6"
            color="text.200"
            marginRight="10px"
          />
          <Icon
            as={AntDesign}
            name="setting"
            size="6"
            color="text.200"
            marginRight="25px"
          />
        </Flex>
      </Flex>
      <SliderAudio displaySliderAudio={displaySliderAudio} />
    </Box>
  );
};
