<<<<<<< HEAD
import React from 'react';
import { ScrollView, VStack } from 'native-base';
import HomeSearch from './HomeSearch';
// import HomeSlider from './HomeSlider';
import HomeList from './HomeList';
import { SafeAreaView } from 'react-native';
import HomeSlider from './HomeSlider';
=======
import React from 'react'
import { ScrollView, VStack } from 'native-base'
import HomeSearch from './HomeSearch'
import HomeSlider from './HomeSlider'
import HomeList from './HomeList'
import { SafeAreaView } from 'react-native'
<<<<<<< HEAD
>>>>>>> test
=======
import { HomePageProps } from '@clvtube/common/navigators/Root'
>>>>>>> implement UI for detail screen

const HomePage = ({ navigation, route }: HomePageProps) => {
  return (
    <SafeAreaView>
<<<<<<< HEAD
      <ScrollView>

        <VStack space={5} safeAreaX={4}>
          <HomeSearch />
          <HomeSlider />
          <HomeList />
        </VStack>
      </ScrollView>
=======
      <VStack space={5} safeAreaX={4}>
        <HomeSearch />
        <HomeSlider navigation={navigation} route={route} />
        <HomeList />
      </VStack>
>>>>>>> test
    </SafeAreaView>
  )
}

export default HomePage
