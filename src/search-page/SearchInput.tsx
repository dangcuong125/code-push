import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, VStack } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import {
  clearValueInputSearch,
  getValueInputSearch,
} from './reducer/searchPage';

const SearchInput = () => {
  const navigation = useNavigation();
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  const valueInputWhenClickOnHistory = useAppSelector(
    state => state.searchPageReducer.valueInputSearch,
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <VStack safeAreaX={4} space={2}>
      <AntDesign
        name="arrowleft"
        size={25}
        onPress={() => {
          navigation.goBack();
          dispatch(clearValueInputSearch());
        }}
      />

      <Input
        autoCapitalize="none"
        ref={inputRef}
        variant={'outline'}
        value={valueInputWhenClickOnHistory}
        color={'black'}
        onChangeText={text => dispatch(getValueInputSearch(text))}
        placeholder="Tìm kiếm"
        textAlignVertical={'center'}
        bgColor={'#F4F4F4'}
        height={'49px'}
        _focus={{
          bg: 'white',
        }}
        fontSize={'14px'}
        borderWidth={0}
        borderRadius={'8px'}
        selectionColor={'black'}
        placeholderTextColor={'#999999'}
        InputLeftElement={
          <Icon as={<AntDesign name="search1" />} size={5} ml={3} mr={-1} />
        }
      />
    </VStack>
  );
};

export default SearchInput;
