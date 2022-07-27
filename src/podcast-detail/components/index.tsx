import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { PodcastDetailProps } from '../interface';
import { Header } from './Header';
import PodcastDetailLearning from './PodcastDetail';

export const PodcastDetail = ({ route, navigation }: PodcastDetailProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar backgroundColor="#FFFFFF" />
      <Header navigation={navigation} route={route} />
      <PodcastDetailLearning navigation={navigation} />
    </SafeAreaView>
  );
};
