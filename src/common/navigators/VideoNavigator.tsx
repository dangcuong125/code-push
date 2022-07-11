import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Video from '@clvtube/home/video';
import ListVideo from '@clvtube/videoDetails/listVideo';

import PlayingVideo from '@clvtube/videoDetails/playingVideo';
import { VIDEO } from '../constants/route.constants';

export type HomeStackParamList = {
  Index: {};
  VideoList: {};
  VideoPlaying: {};
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

const VideoRoute = () => {
  return (
    <Stack.Navigator initialRouteName={VIDEO.INDEX}>
      <Stack.Screen
        name={VIDEO.INDEX}
        component={Video}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={VIDEO.VIDEO_LIST}
        component={ListVideo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={VIDEO.VIDEO_PLAYING}
        component={PlayingVideo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default VideoRoute;
