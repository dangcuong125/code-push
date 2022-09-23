/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react';
import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import { ScrollView } from 'react-native';
import { useGetSearchResult } from './hooks/useGetSearchResult';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { ISearchResult, SearchPageProps } from './interface';
import { classifySearchResult, getSearchResult } from './reducer/searchPage';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  PODCAST_DETAIL,
  VIDEO_ROUTE,
} from '@clvtube/common/constants/route.constants';

const SearchResult = ({ navigation }: SearchPageProps) => {
  const dispatch = useAppDispatch();
  const valueInput = useAppSelector(
    state => state.searchPageReducer.valueInputSearch,
  );

  const podcastResult = useAppSelector(
    state => state.searchPageReducer.podcastSearchResult,
  );

  const videoResult = useAppSelector(
    state => state.searchPageReducer.videoSearchResult,
  );

  const { data } = useGetSearchResult(valueInput);
  const searchResult = data?.data?.items;

  useEffect(() => {
    dispatch(getSearchResult(searchResult));
    dispatch(classifySearchResult());
  }, [searchResult]);
  return (
    <VStack safeArea={4}>
      <Text
        fontStyle={'normal'}
        fontSize={'16px'}
        fontWeight={400}
        lineHeight={'22px'}
        color={'neural.9'}>
        {searchResult?.length ? 'Kết quả tìm kiếm' : 'Lịch sử tìm kiếm'}
      </Text>
      <Text
        fontStyle={'normal'}
        marginTop={'15px'}
        fontSize={'16px'}
        fontWeight={400}
        lineHeight={'22px'}
        color={'neural.9'}>
        {videoResult?.length && 'Video'}
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {videoResult?.length &&
          videoResult?.map(video => (
            <Pressable
              height="195px"
              marginTop="9px"
              onPress={() =>
                navigation.navigate(VIDEO_ROUTE.VIDEO_PLAYING, {
                  id: video?.id,
                })
              }
              marginRight="20px"
              key={video?.id}
              width="162px"
              textAlign={'center'}>
              <Image
                source={{ uri: 'https://wallpaperaccess.com/full/317501.jpg' }}
                width="162px"
                height="126px"
              />
              <Box bgColor="#5AC8FA1A" padding="10px">
                <Text color={'text.100'} fontWeight={400}>
                  {video?.name}
                </Text>
              </Box>
            </Pressable>
          ))}
      </ScrollView>
      <Text
        fontStyle={'normal'}
        fontSize={'16px'}
        fontWeight={400}
        lineHeight={'22px'}
        color={'neural.9'}>
        {podcastResult?.length && 'Podcast'}
      </Text>
      <HStack space={3} py={2} flexWrap={'wrap'}>
        {podcastResult?.length &&
          podcastResult?.map((podcast: ISearchResult) => (
            // <TouchableOpacity key={index}>
            //   <Button
            //     borderRadius={8}
            //     px={5}
            //     marginBottom={2}
            //     bgColor={'#E6E6E6'}
            //     _text={{
            //       color: '#282F3E',
            //     }}>
            //     {item}
            //   </Button>
            // </TouchableOpacity>
            <Pressable
              key={podcast?.id}
              marginTop="15px"
              borderColor="#E6E6E6"
              borderWidth={'1px'}
              borderRadius={'12px'}
              onPress={() => {
                navigation.navigate(PODCAST_DETAIL, { id: podcast?.id });
              }}
              p={3}>
              <HStack space={4} alignItems={'center'}>
                <Image
                  source={{
                    uri: 'https://wallpaperaccess.com/full/317501.jpg',
                  }}
                  width={'101px'}
                  height={'100px'}
                  borderRadius={'10px'}
                />
                <VStack space={1.5} width={'60%'}>
                  <Heading
                    fontStyle={'normal'}
                    fontSize={'16px'}
                    fontWeight={400}
                    lineHeight={'22px'}
                    color={'#161719'}>
                    {podcast.name}
                  </Heading>
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'19px'}
                    color={'#999999'}>
                    {podcast.desc}
                  </Text>
                  <HStack justifyContent={'flex-start'} alignItems={'center'}>
                    <HStack space={0.5} alignItems={'center'}>
                      <MaterialCommunityIcons
                        name="clock-time-three-outline"
                        size={15}
                        color={'#3D9BE0'}
                      />
                      <Text
                        fontStyle={'normal'}
                        fontSize={'10px'}
                        fontWeight={400}
                        color={'#666666'}>
                        01:30
                      </Text>
                    </HStack>
                    <Entypo name="dot-single" size={15} color={'#999999'} />
                    <Text
                      fontStyle={'normal'}
                      fontSize={'10px'}
                      fontWeight={400}
                      color={'#999999'}>
                      Clevertube
                    </Text>
                    <Entypo name="dot-single" size={15} color={'#999999'} />
                    {/* <Text
                      fontStyle={'normal'}
                      fontSize={'10px'}
                      fontWeight={400}
                      color={'#999999'}>
                      {item.audiosToTopics?.map(
                        (topic: any) => topic?.topicKey,
                      )}
                    </Text> */}
                  </HStack>
                </VStack>
              </HStack>
            </Pressable>
          ))}
      </HStack>
    </VStack>
  );
};

export default SearchResult;
