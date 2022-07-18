import React from 'react';
import { ScrollView, VStack } from 'native-base';
import { SafeAreaView } from 'react-native';
import SearchInput from './SearchInput';
import SearchRecommend from './SearchRecommend';
import TopSearch from './TopSearch';

const SearchPage = () => {
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      height: '100%',
    }}>
      <VStack>
        <SearchInput />
        <ScrollView>
          <TopSearch />
          <SearchRecommend />
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default SearchPage;
