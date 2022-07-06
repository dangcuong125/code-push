import React from 'react';
import { SafeAreaView } from 'react-native';
import { PodcastDetailProps } from '../interface';
import { Header } from './Header';
import PodcastDetailLearning from './PodcastDetail';

export const PodcastDetail = ({ route, navigation }: PodcastDetailProps) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} route={route} />
      <PodcastDetailLearning />
    </SafeAreaView>
  );
};
