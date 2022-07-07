import React from 'react';
import { Heading, HStack, Image, Text, VStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { imageHomePage } from '@clvtube/common/constants/imagePath';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VIDEO } from '../../../common/constants/route.constants';


const VideoItem = () => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
        onPress={() => navigator.navigate(VIDEO.VIDEO_PLAYING1, {})}
      >
    <HStack space={2} marginBottom={4} >
      <Image
              source={imageHomePage.VIDEO_ITEM}
              alt={'image'}
              height={'65px'}
              flex={1}
              borderRadius={8}
            />
            <VStack
              flex={2}
              justifyContent={'space-between'}
            >
              <Heading
                fontStyle={'normal'}
                fontSize={'16px'}
                fontWeight={600}
                color={'#1A1A1A'}
                numberOfLines={2}
              >
                Why do people developer mobile app Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, aliquid?
              </Heading>
              <HStack justifyContent={'space-between'}>
                <HStack space={1.5} alignItems={'center'}>
                  <FontAwesome name='user' size={12} color={'#216BCD'} />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'12px'}
                    fontWeight={400}
                    color={'#666666'}
                  >
                    254 Students
                  </Text>
                </HStack>
                <HStack space={1.5} alignItems={'center'}>
                    <MaterialCommunityIcons name='clock-time-three' size={12} color={'#216BCD'} />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'12px'}
                    fontWeight={400}
                    color={'#666666'}
                  >
                    01:30
                  </Text>
                </HStack>
              </HStack>
            </VStack>
    </HStack>
      </TouchableOpacity>
  )
}

export default VideoItem;