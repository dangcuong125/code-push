import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useGetPodcastDetail } from '../hooks/useGetPodcastDetail';
import { PodcastDetailProps } from '../interface';
import { Header } from './Header';
import PodcastDetailLearning from './PodcastDetail';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useRoute } from '@react-navigation/native';
import { getAudioId } from '../reducer/podcastDetail';

export const PodcastDetail = ({ route, navigation }: PodcastDetailProps) => {
  const { id } = useRoute()?.params;
  const dispatch = useAppDispatch();

  const { data } = useGetPodcastDetail(12);
  useEffect(() => {
    dispatch(getAudioId(id));
  }, [id]);
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar backgroundColor="#FFFFFF" />
      <Header navigation={navigation} route={route} data={data} />
      <PodcastDetailLearning
        navigation={navigation}
        route={route}
        data={data}
      />
    </SafeAreaView>
  );
};
