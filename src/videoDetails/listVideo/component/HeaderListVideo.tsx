import { Heading, HStack, Image, Stack, Text, VStack } from 'native-base';
import React from 'react';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { imagePodcast } from '@clvtube/common/constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { VIDEO } from '../../../common/constants/route.constants';

const HeaderListVideo = () => {
  const navigator = useNavigation();

  return (
    <Stack
      height={'31%'}
      bgColor={'linear-gradient(180.04deg, rgba(90, 200, 250, 0.4) -197.11%, #FFFFFF 13.15%, rgba(175, 215, 233, 0.4) 146.79%)'}
    >
        <VStack
          safeAreaX={4}
          safeAreaTop={12}
          space={2}
        >
            <AntDeisgn
              name='arrowleft'
              size={25}
              color='black'
              onPress={() => navigator.goBack()}
            />
            <HStack
              justifyContent={'space-between'}
              paddingLeft={4}
            >
              <VStack
                justifyContent={'center'}
                space={7}
              >
                <Heading
                  fontStyle={'normal'}
                  fontSize={'32px'}
                  fontWeight={'600'}
                  lineHeight={'44px'}
                  color={'#222B45'}
                >
                  Mathematics
                </Heading>
                <HStack space={1}>
                  <MaterialIcons name='video-library' size={20} color='black' onPress={() => navigator.navigate(VIDEO.VIDEO_PLAYING2)} />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'19px'}
                    color={'#1A1A1A'}
                  >15 Videos</Text>
                </HStack>
              </VStack>
              <Image
                source={imagePodcast.MATH_PODCAST}
                size={'xl'}
                alt={'image'}
              />
            </HStack>
        </VStack>
    </Stack>
  )
}

export default HeaderListVideo;