import React, { useEffect } from 'react';
import { HStack, Icon, Text, VStack } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useGetSearchHistory } from './hooks/useGetSearchHistory';
import { ISearchHistory } from './interface';
import { useDeleteHistoryItem } from './hooks/useDeleteHistoryItem';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  deleteSearchItem,
  getSearchHistory,
  getValueInputSearch,
} from './reducer/searchPage';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';

const SearchHistory = () => {
  const dispatch = useAppDispatch();

  const { data } = useGetSearchHistory();
  const { mutate } = useDeleteHistoryItem();

  const searchHistory = data?.data;

  const newSearchHistory = useAppSelector(
    state => state.searchPageReducer.searchHistory,
  );

  useEffect(() => {
    dispatch(getSearchHistory(searchHistory));
  }, [searchHistory]);
  return (
    <VStack safeArea={4} borderBottomWidth={1} borderBottomColor={'gray.200'}>
      {newSearchHistory?.map((item: ISearchHistory) => (
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          py={1}
          key={item?.id}>
          <Text
            fontSize={'16px'}
            onPress={() => dispatch(getValueInputSearch(item?.keyword))}
            color={'black'}>
            {item?.keyword}
          </Text>
          <Icon
            as={AntDesign}
            name="close"
            onPress={() => {
              dispatch(deleteSearchItem(item?.id));
              mutate(item?.id);
            }}
            size="5"
          />
        </HStack>
      ))}
      <Text fontSize={'16px'} color={'#9B9B9B'} textAlign={'center'}>
        Xoá lịch sử tìm kiếm
      </Text>
    </VStack>
  );
};

export default SearchHistory;
