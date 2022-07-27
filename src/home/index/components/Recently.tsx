import {
  // HStack,
  Heading,
  Pressable,
  // Progress,
  Text,
  VStack,
} from 'native-base';
import { FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { HomePageProps, IDataViewRecently } from '../interfaces';
// import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HOME_ROUTE,
  PODCAST_DETAIL,
  VIDEO_ROUTE,
} from '@clvtube/common/constants/route.constants';

const VideoRecommended = ({
  item,
  navigation,
}: {
  item: any;
  navigation: any;
}) => {
  return (
    <Pressable
      width="165px"
      ml={4}
      mr={2}
      onPress={() =>
        navigation.navigate(
          item?.type === 'audio' ? PODCAST_DETAIL : VIDEO_ROUTE.VIDEO_PLAYING,
          {
            id: item?.item?.id,
          },
        )
      }
      borderWidth={'1px'}
      borderColor={'#E6E6E6'}
      borderRadius={'12px'}>
      <Image
        source={item?.item.audioThumbnail?.thumbnailId}
        style={{
          width: 163,
          height: 87,
          resizeMode: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <VStack space={2} safeAreaY={2} safeAreaX={1}>
        <Text
          fontStyle={'normal'}
          fontSize={'10px'}
          fontWeight={600}
          color={'text.300'}>
          {item?.item?.title}
        </Text>
        <Text
          fontStyle={'normal'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
          color={'text.300'}>
          {item?.item?.desc}
        </Text>
        {/* <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Progress
            value={item.progress}
            height={'4px'}
            bg={'rgba(90, 200, 250, 0.4)'}
            _filledTrack={{ bg: '#216BCD' }}
            flexGrow={0.8}
          />
          <Text
            fontStyle={'normal'}
            fontSize={'10px'}
            fontWeight={400}
            color={'#4F4F4F'}>
            5/10
          </Text>
        </HStack> */}
      </VStack>
    </Pressable>
  );
};

export const Recently = ({ route, navigation }: HomePageProps) => {
  const [recentVideosAndPodcasts, setRecentVideosAndPodcasts] = useState<any>();
  // const tokenApp = useAppSelector(state => state.authReducer.tokenApp);
  // const recentVideoAndPodcast = useAppSelector(
  //   state => state.homePage.saveRecentVideoAndPodcast,
  // );
  // // console.log('test', recentVideoAndPodcast);

  // const recentVideoAndPodcastWithoutDuplicate = [
  //   ...new Set(recentVideoAndPodcast),
  // ].slice(0, 5);
  // const storeRecentVideoAndPodcast = async () => {
  //   await AsyncStorage.setItem(
  //     'recentVideoAndPodcast',
  //     JSON.stringify(recentVideoAndPodcastWithoutDuplicate),
  //   );
  // };
  // if (tokenApp) storeRecentVideoAndPodcast();
  if (route.name === HOME_ROUTE.INDEX) {
    AsyncStorage.getItem('recentVideoAndPodcast')
      .then(value => {
        if (value !== null) setRecentVideosAndPodcasts(JSON.parse(value));
      })
      .catch(err => console.log('error', err));
  }
  const renderItem = ({ item }: { item: IDataViewRecently }) => {
    return <VideoRecommended item={item} navigation={navigation} />;
  };
  return (
    <VStack bgColor={'white'} safeAreaY={3}>
      <Heading
        fontStyle={'normal'}
        fontSize={'18px'}
        fontWeight={600}
        lineHeight={'25px'}
        color={'#000000'}
        pl={4}
        pb={4}>
        Gần đây
      </Heading>
      <FlatList
        data={recentVideosAndPodcasts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </VStack>
  );
};
