import {
  Box, Button, HStack, Heading,
  Text, VStack,
} from 'native-base';
import React from 'react';
import { FlatList, Image } from 'react-native';

import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { imageHomePage } from '@clvtube/common/constants/imagePath';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const VideoTypeCarousel = ({ item, onPress }) => {
  return (
    <Button
      height={'27px'}
      lineHeight={'27px'}
      px={2}
      marginLeft={4}
      variant="outline"
      borderColor="#3D9BE0"
      bgColor={item.backgroundColor}
      onPress={onPress}
      _text={{
        color: item.color,
        fontStyle: 'normal',
        height: '20px',
        fontWeight: 400,
      }}>
      {item.type}
    </Button>
  );
};

const MaybeYouLikeVideo = () => {
  const videoTypeCarousel = useAppSelector(
    state => state?.homePage?.videoTypeCarousel,
  );

  const videoListCarousel = useAppSelector(state => state.homePage.videoList);

  const renderVideoTypeCarousel = ({ item }) => {
    return (
      <VideoTypeCarousel
        item={item}
      />
    );
  };

  return (
    <VStack mb={4}>
      <VStack bgColor={'white'} safeAreaY={4} space={5}>
        <HStack
          safeAreaX={4}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Heading
            fontStyle={'normal'}
            fontSize={'18px'}
            fontWeight={600}
            color={'#000000'}>
            Có thể bạn thích
          </Heading>
          <Text
            fontStyle={'normal'}
            fontSize={'12px'}
            fontWeight={400}
            color={'#216BCD'}>
            Xem tất cả
          </Text>
        </HStack>
        <FlatList
          horizontal={true}
          data={videoTypeCarousel}
          renderItem={renderVideoTypeCarousel}
        />
        <VStack space={3} safeAreaX={4}>
            <VStack space={3}>
                <Image
                  source={imageHomePage.VIDEO_POPULAR}
                  style={{ width: '100%', height: 157, resizeMode: 'contain' }}
                />
              <HStack justifyContent={'space-between'} alignItems={'center'} >
                <HStack justifyContent={'space-around'} space={3} alignItems={'center'}>
                    <AntDesign name="playcircleo" size={40} color={'#0E3C9E'} />
                    <VStack>
                        <Text
                            fontStyle={'normal'}
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'19px'}
                            color={'#1A1A1A'}
                        >
                            Developer FE
                        </Text>
                        <Text
                            fontStyle={'normal'}
                            fontSize={'12px'}
                            fontWeight={400}
                            lineHeight={'16px'}
                            color={'#999999'}
                        >
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
            <HStack justifyContent={'space-between'}>
                <Box
                  width={'47%'}
                >
                  <Image source={imageHomePage.VIDEO_POPULAR}
                    style={{
                      width: '100%',
                      height: 85,
                      resizeMode: 'contain',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#000000'}
                    lineHeight={'19px'}
                    textAlign={'center'}
                  >
                    Taodzo Phan
                  </Text>
                </Box>
                <Box
                  width={'47%'}
                >
                  <Image source={imageHomePage.VIDEO_POPULAR}
                    style={{
                      width: '100%',
                      height: 85,
                      resizeMode: 'contain',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#000000'}
                    lineHeight={'19px'}
                    textAlign={'center'}
                  >
                    Taodzo Phan
                  </Text>
                </Box>
              </HStack>
        </VStack>
        <VStack space={3} safeAreaX={4}>
            <VStack space={3}>
                <Image
                  source={imageHomePage.VIDEO_POPULAR}
                  style={{ width: '100%', height: 157, resizeMode: 'contain' }}
                />
              <HStack justifyContent={'space-between'} alignItems={'center'} >
                <HStack justifyContent={'space-around'} space={3} alignItems={'center'}>
                    <AntDesign name="playcircleo" size={40} color={'#0E3C9E'} />
                    <VStack>
                        <Text
                            fontStyle={'normal'}
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'19px'}
                            color={'#1A1A1A'}
                        >
                            Developer FE
                        </Text>
                        <Text
                            fontStyle={'normal'}
                            fontSize={'12px'}
                            fontWeight={400}
                            lineHeight={'16px'}
                            color={'#999999'}
                        >
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
            <HStack justifyContent={'space-between'}>
                <Box
                  width={'47%'}
                >
                  <Image source={imageHomePage.VIDEO_POPULAR}
                    style={{
                      width: '100%',
                      height: 85,
                      resizeMode: 'contain',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#000000'}
                    lineHeight={'19px'}
                    textAlign={'center'}
                  >
                    Taodzo Phan
                  </Text>
                </Box>
                <Box
                  width={'47%'}
                >
                  <Image source={imageHomePage.VIDEO_POPULAR}
                    style={{
                      width: '100%',
                      height: 85,
                      resizeMode: 'contain',
                      borderRadius: 8,
                    }}
                  />
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#000000'}
                    lineHeight={'19px'}
                    textAlign={'center'}
                  >
                    Taodzo Phan
                  </Text>
                </Box>
              </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MaybeYouLikeVideo;
