import React from 'react';
import { Box, VStack } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-native';
import SearchInput from './SearchInput';
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
          <Box height="150px"></Box>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default SearchPage;
