import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Video from '@clvtube/home/video';
import ListVideo from '@clvtube/video-detail/listVideo';

import { VIDEO_ROUTE } from '../constants/route.constants';

export type VideoStackParamList = {
  Index: {};
  VideoList: {};
  VideoPlaying: {};
};
const Stack = createNativeStackNavigator<VideoStackParamList>();

const VideoRoute = () => {
  return (
    <Stack.Navigator initialRouteName={VIDEO_ROUTE.INDEX}>
      <Stack.Screen
        name={VIDEO_ROUTE.INDEX}
        component={Video}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={VIDEO_ROUTE.VIDEO_LIST}
        component={ListVideo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default VideoRoute;
