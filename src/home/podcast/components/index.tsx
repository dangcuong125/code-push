import SearchingHeader from '@clvtube/common/components/searchHeader/index';
import { Box } from 'native-base';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { MaybeYouLike } from './MaybeYouLike';
import { OutStandingPodcast } from './OutstandingPodcast';
import { PodcastList } from './PodcastList';
import PopularTopics from './PopularTopics';
import { Speak } from './Speak';
import { PodcastListProps } from '../interfaces';

const Podcast = ({ navigation, route }: PodcastListProps) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Box bgColor="#FFFFFF" paddingTop="20px">
          <SearchingHeader />
          <PopularTopics navigation={navigation} route={route} />
        </Box>
        <OutStandingPodcast />
        <PodcastList />
        <MaybeYouLike />
        <Speak />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Podcast;
