
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Video from '@clvtube/home/video';
import ListVideo from '@clvtube/videoDetails/listVideo';

import { VIDEO } from '../constants/route.constants';
import VideoDetailPage from '@clvtube/z-video-details/components/index';
import PlayingVideo from '@clvtube/videoDetails/playingVideo';


export type HomeStackParamList = {
    Index: {},
    VideoList: {},
    VideoPlaying1: {},
    VideoPlaying2: {},
}
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
                name={VIDEO.VIDEO_PLAYING1}
                component={VideoDetailPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={VIDEO.VIDEO_PLAYING2}
                component={PlayingVideo}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default VideoRoute;