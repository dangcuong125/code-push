import SearchHeader from '@clvtube/common/components/searchHeader/index';
import { ScrollView, VStack } from 'native-base';
import React from 'react';

import { PodcastList } from './PodcastList';
import { Recently } from './Recently';
import { ReviseNewWord } from './ReviseNewWord';
import { Speak } from './Speak';
import { VideoList } from './VideoList';
import { Welcome } from './Welcome';
import { HomePageProps } from '../interfaces';
import { SafeAreaView } from 'react-native';

const HomePage = ({ navigation, route }: HomePageProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4}>
          <VStack safeAreaTop={2} bgColor={'white'}>
            <SearchHeader />
            <Welcome />
          </VStack>
          <VideoList />
          <Recently />
          <PodcastList navigation={navigation} route={route} />
          <ReviseNewWord />
          <Speak />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
