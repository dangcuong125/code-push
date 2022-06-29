import { Box, HStack, Heading, Text, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { imageHomePage } from '../../../common/constants/imagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPupolar = () => {
  return (
    <VStack bgColor={'white'} safeArea={4} space={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'18px'}
        fontWeight={500}
        lineHeight={'25px'}
        color={'#000000'}>
        Video nổi bật
      </Heading>
      <VStack space={3}>
        <Image
          source={imageHomePage.VIDEO_POPULAR}
          style={{ width: '100%', height: 157, resizeMode: 'contain' }}
        />
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack
            justifyContent={'space-around'}
            space={3}
            alignItems={'center'}>
            <AntDesign name="playcircleo" size={40} color={'#0E3C9E'} />
            <VStack>
              <Text
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={400}
                lineHeight={'19px'}
                color={'#1A1A1A'}>
                Developer FE
              </Text>
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                lineHeight={'16px'}
                color={'#999999'}>
                Code mobile app with ReactNative
              </Text>
            </VStack>
          </HStack>
          <HStack space={0.5} alignItems={'center'}>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={15}
              color={'#3D9BE0'}
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
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Box
          width="170px"
          borderRadius={'12px'}
          backgroundColor={'rgba(90, 200, 250, 0.1)'}>
          <VStack space={2}>
            <Image
              source={imageHomePage.VIDEO_2}
              style={{
                width: '100%',
                height: 126,
                resizeMode: 'cover',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <VStack safeAreaX={2} safeAreaBottom={3} space={2}>
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                lineHeight={'16px'}
                color={'#181818'}>
                Lorem ipsum dolor sit amet consectetur elit.
              </Text>
              <HStack space={0.5} alignItems={'center'}>
                <MaterialCommunityIcons
                  name="eye"
                  size={15}
                  color={'#3D9BE0'}
                />
                <Text
                  fontStyle={'normal'}
                  fontSize={'12px'}
                  fontWeight={400}
                  color={'#666666'}>
                  1234
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>
        <Box
          width="170px"
          borderRadius={'12px'}
          backgroundColor={'rgba(90, 200, 250, 0.1)'}>
          <VStack space={2}>
            <Image
              source={imageHomePage.VIDEO_2}
              style={{
                width: '100%',
                height: 126,
                resizeMode: 'cover',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <VStack safeAreaX={2} safeAreaBottom={3} space={2}>
              <Text
                fontStyle={'normal'}
                fontSize={'12px'}
                fontWeight={400}
                lineHeight={'16px'}
                color={'#181818'}>
                Lorem ipsum dolor sit amet consectetur elit.
              </Text>
              <HStack space={0.5} alignItems={'center'}>
                <MaterialCommunityIcons
                  name="eye"
                  size={15}
                  color={'#3D9BE0'}
                />
                <Text
                  fontStyle={'normal'}
                  fontSize={'12px'}
                  fontWeight={400}
                  color={'#666666'}>
                  1234
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default VideoPupolar;
