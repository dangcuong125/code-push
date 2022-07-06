import React from 'react';
import { PodcastListWithTopic } from './PodcastListWithTopic';
import { SafeAreaView } from 'react-native';
import { PodcastListWithTopicProps } from '../interface';

const PodcastDetail = ({ navigation, route }: PodcastListWithTopicProps) => {
  return (
    <SafeAreaView>
      <PodcastListWithTopic navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default PodcastDetail;
