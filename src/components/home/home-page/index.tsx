import React from 'react';
import { ScrollView, VStack } from 'native-base';
import HomeSearch from './HomeSearch';
// import HomeSlider from './HomeSlider';
import HomeList from './HomeList';
import { SafeAreaView } from 'react-native';
import HomeSlider from './HomeSlider';


const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <VStack space={5} safeAreaX={4}>
          <HomeSearch />
          <HomeSlider />
          <HomeList />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage