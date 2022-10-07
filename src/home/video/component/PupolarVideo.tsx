import { VIDEO_ROUTE } from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Heading, Image, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { useGetVideoFeature } from '../hooks/useVideo';
import { updateVideosFeature } from '../slice';
import { formatTimePlayer } from '@clvtube/common/lib/common.lib';

const PupolarVideo = () => {
  const { videosFeature } = useAppSelector(state => state.videoReducer);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { data: DataVideoFeature } = useGetVideoFeature();
  // console.log({ DataVideoRedux: videosFeature.length });

  useEffect(() => {
    dispatch(updateVideosFeature(DataVideoFeature?.data));
  }, [DataVideoFeature?.data]);

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
        {videosFeature?.map((item, index) => {
          if (index === 0) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{ uri: item?.thumbnails.medium.url }}
                  style={{
                    width: '100%',
                    height: 160,
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                  borderTopRadius={'12px'}
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
                        {item.name}
                      </Text>
                      <Text
                        fontStyle={'normal'}
                        fontSize={'12px'}
                        fontWeight={400}
                        lineHeight={'16px'}
                        color={'#999999'}>
                        {item.desc}
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
                      {formatTimePlayer(item.length)}
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>
            );
          }
          return null;
        })}
      </VStack>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        {videosFeature?.map((item, index) => {
          if (index === 1 || index === 2) {
            return (
              <Box
                onTouchEnd={() => {
                  navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, {
                    id: item.id,
                  });
                }}
                width={'47%'}
                borderRadius={'12px'}
                backgroundColor={'rgba(90, 200, 250, 0.1)'}>
                <VStack space={2}>
                  <Image
                    source={{ uri: item?.thumbnails.medium.url }}
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
                      {item.desc}
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
            );
          }
          return null;
        })}
      </HStack>
    </VStack>
  );
};

export default PupolarVideo;
