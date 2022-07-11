import { Badge, HStack, Text, VStack } from 'native-base';
import React from 'react';
import YouTube from 'react-native-youtube';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const YoutubeVideo = ({ videoPlay }) => {
  return (
    <VStack>
      <YouTube
        apiKey="react native"
        videoId={videoPlay?.videoCode}
        play={true}
        fullscreen={false}
        style={{
          height: 250,
        }}
      />
      <VStack
        margin={4}
        safeArea={3}
        borderWidth={0.5}
        borderColor={'#999999'}
        borderRadius={8}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={2}>
            <Badge
              borderRadius={10}
              colorSchema={'#F4F4F4'}
              _text={{
                fontStyle: 'normal',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '19px',
              }}>
              0.75x
            </Badge>
            <Badge borderRadius={10} colorSchema={'#F4F4F4'} paddingX={8}>
              <Octicons name="arrow-switch" size={20} color={'#B3B3B3'} />
            </Badge>
          </HStack>
          <MaterialIcons name="filter-none" size={25} color="black" />
        </HStack>
        <HStack
          safeAreaY={12}
          justifyContent={'space-between'}
          alignItems={'center'}
          space={3}>
          <MaterialIcons name="keyboard-arrow-left" size={20} color="#999999" />
          <Text
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={600}
            textAlign={'center'}
            textDecorationLine={'underline'}
            textDecorationColor={'#999999'}
            color={'black'}
            flex={1}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color="#999999"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default YoutubeVideo;
