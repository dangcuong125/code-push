import React from 'react';
import { Box, VStack } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-native';
import SearchInput from './SearchInput';
// import SearchRecommend from './SearchRecommend';
import SearchResult from './SearchResult';
import { SearchPageProps } from './interface';

const SearchPage = ({ navigation, route }: SearchPageProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <VStack>
        <SearchInput />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchResult navigation={navigation} route={route} />
          {/* <SearchRecommend /> */}
          <Box></Box>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default SearchPage;
