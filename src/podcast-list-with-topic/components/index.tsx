import React from 'react';
import { PodcastListWithTopic } from './PodcastListWithTopic';
import { SafeAreaView, StatusBar } from 'react-native';
import { PodcastListWithTopicProps } from '../interface';

const PodcastDetail = ({ navigation, route }: PodcastListWithTopicProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar backgroundColor="#FFFFFF" />
      <PodcastListWithTopic navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
export default PodcastDetail;
