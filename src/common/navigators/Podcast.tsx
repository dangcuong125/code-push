import React from 'react';
import Podcast from '@clvtube/home/podcast/components/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PODCAST_LIST_WITH_TOPIC } from '../constants/route.constants';
import PodcastDetail from '@clvtube/podcast-list-with-topic/components/index';

const Stack = createNativeStackNavigator();

export const PodcastRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Podcast"
        component={Podcast}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PODCAST_LIST_WITH_TOPIC}
        component={PodcastDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
