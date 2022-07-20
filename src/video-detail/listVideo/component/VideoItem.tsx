import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, Image, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VIDEO_ROUTE } from '../../../common/constants/route.constants';

const VideoItem = ({ item }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigator.navigate(VIDEO_ROUTE.VIDEO_PLAYING, { id: item.id })}>
      <HStack space={2} marginBottom={4}>
        <Image
          source={{ uri: item?.thumbnails.medium.url }}
          alt={'image'}
          height={'65px'}
          flex={1}
          borderRadius={8}
        />
        <VStack flex={2} justifyContent={'space-between'}>
          <Heading
            fontStyle={'normal'}
            fontSize={'16px'}
            fontWeight={600}
            color={'#1A1A1A'}
            numberOfLines={2}>
            {item.name}
          </Heading>
          <HStack justifyContent={'space-between'}>
            <HStack space={1.5} alignItems={'center'}>
              <FontAwesome name="user" size={12} color={'#216BCD'} />
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                color={'#666666'}>
                254 Students
              </Text>
            </HStack>
            <HStack space={1.5} alignItems={'center'}>
              <MaterialCommunityIcons
                name="clock-time-three"
                size={12}
                color={'#216BCD'}
              />
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                color={'#666666'}>
                01:30
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default VideoItem;
