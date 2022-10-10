/* eslint-disable multiline-ternary */
import {
  PODCAST_DETAIL,
  VIDEO_ROUTE,
} from '@clvtube/common/constants/route.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import _ from 'lodash';
import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGetSearchResult } from './hooks/useGetSearchResult';
import { ISearchResult, SearchPageProps } from './interface';
import { classifySearchResult, getSearchResult } from './reducer/searchPage';
import SearchHistory from './SearchHistory';

const SearchResult = ({ navigation }: SearchPageProps) => {
  const [search, setSearch] = useState('');
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

  const { data } = useGetSearchResult({
    keyword: search,
    page: 1,
    limit: 10,
  });

  const searchResult = data?.data?.items;
  const debouncer = useCallback(_.debounce(setSearch, 1000), []);
  useEffect(() => {
    debouncer(valueInput);
  }, [valueInput]);

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
      {searchResult?.length ? (
        <Box>
          <Text
            fontStyle={'normal'}
            marginTop={'15px'}
            fontSize={'16px'}
            fontWeight={400}
            lineHeight={'22px'}
            color={'neural.9'}>
            {!!videoResult?.length && 'Video'}
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {!!videoResult?.length &&
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
                    source={{
                      uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    width="162px"
                    height="126px"
                  />
                  <Box bgColor="amber.500" padding="10px">
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
            {!!podcastResult?.length && 'Podcast'}
          </Text>
          <HStack space={3} py={2} flexWrap={'wrap'}>
            {!!podcastResult?.length &&
              podcastResult?.map((podcast: ISearchResult) => (
                <Pressable
                  key={podcast?.id}
                  marginTop="15px"
                  borderColor="neural.2"
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
                        color={'text.100'}>
                        {podcast.name}
                      </Heading>
                      <Text
                        fontStyle={'normal'}
                        fontSize={'14px'}
                        fontWeight={400}
                        lineHeight={'19px'}
                        color={'neural.5'}>
                        {podcast.desc}
                      </Text>
                      <HStack
                        justifyContent={'flex-start'}
                        alignItems={'center'}>
                        <HStack space={0.5} alignItems={'center'}>
                          <MaterialCommunityIcons
                            name="clock-time-three-outline"
                            size={15}
                            color={'primary.11'}
                          />
                          <Text
                            fontStyle={'normal'}
                            fontSize={'10px'}
                            fontWeight={400}
                            color={'neural.4'}>
                            01:30
                          </Text>
                        </HStack>
                        <Entypo
                          name="dot-single"
                          size={15}
                          color={'neural.5'}
                        />
                        <Text
                          fontStyle={'normal'}
                          fontSize={'10px'}
                          fontWeight={400}
                          color={'neural.5'}>
                          Clevertube
                        </Text>
                        <Entypo
                          name="dot-single"
                          size={15}
                          color={'neural.5'}
                        />
                      </HStack>
                    </VStack>
                  </HStack>
                </Pressable>
              ))}
          </HStack>
        </Box>
      ) : (
        <SearchHistory />
      )}
    </VStack>
  );
};

export default SearchResult;
