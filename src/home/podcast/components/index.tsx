import SearchingHeader from '@clvtube/common/components/searchHeader/index';
import { VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
// import { MaybeYouLike } from './MaybeYouLike';
// import { OutStandingPodcast } from './OutstandingPodcast';
import { PodcastList } from './PodcastList';
import PopularTopics from './PopularTopics';
// import { Speak } from './Speak';
import { PodcastListProps } from '../interfaces';
import PodcastSave from '@clvtube/podcast-save';

const Podcast = ({ navigation, route }: PodcastListProps) => {
  return (
    // <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
    // <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
    <ScrollView>
      <VStack space={4}>
        <VStack safeAreaTop={10} bgColor={'white'}>
          <SearchingHeader />
          <PopularTopics navigation={navigation} route={route} />
        </VStack>
        <VStack space={4}>
          <PodcastSave navigation={navigation} route={route} />
        </VStack>
        {/* <OutStandingPodcast /> */}
        <PodcastList navigation={navigation} route={route} />
        {/* <MaybeYouLike /> */}
        {/* <Speak /> */}
      </VStack>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Podcast;
