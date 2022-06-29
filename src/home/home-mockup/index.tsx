import { VStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomePageProps } from '../index/interfaces';
import HomeList from './HomeList';
import HomeSearch from './HomeSearch';
import HomeSlider from './HomeSlider';

const HomePage = ({ navigation, route }: HomePageProps) => {
  return (
    <SafeAreaView>
      <VStack space={5} safeAreaX={4}>
        <HomeSearch />
        <HomeSlider navigation={navigation} route={route} />
        <HomeList />
      </VStack>
    </SafeAreaView>
  );
};

export default HomePage;
