import React from 'react';

import { Image } from 'react-native';
import { HStack, Icon, Input } from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { imageLogo } from '../../constants/imagePath';


const SearchHeader = () => {
  return (
    <HStack safeAreaX={4} height={'48px'} alignItems={'center'}>
      {/* Element Logo */}
      <Image
        source={imageLogo.LOGO_MINI}
        style={{
          width: 32,
          height: 32,
          resizeMode: 'contain',
        }}
      />
      {/* Element Input search */}
      <Input
        flexGrow={1}
        height={'36px'}
        mx={'10px'}
        fontSize={'16px'}
        borderWidth={0}
        borderRadius={'8px'}
        color={'black'}
        bgColor={'#F4F4F4'}
        selectionColor={'black'}
        placeholder="Tìm kiếm"
        placeholderTextColor={'#999999'}
        InputLeftElement={
          <Icon as={<AntDesign name="search1" />} ml={3} mr={-2} />
        }
      />
      {/* Element Notify */}
      <Ionicons
        name="ios-notifications-outline"
        size={25}
        style={{ paddingLeft: 12 }}
      />
    </HStack>
  );
};

export default SearchHeader;
