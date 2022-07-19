// 🚀 import Component from package
import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// 🚀 import Components from Pages
import Intro from '@clvtube/intro/component/Intro';
import Auth from '@clvtube/auth';
import InputOTP from '@clvtube/auth/component/InputOTP';
import CreateInfo from '@clvtube/auth/component/CreateInfo';
import RegisterSuccess from '@clvtube/auth/component/RegisterSuccess';
import OpenDashboard from '@clvtube/auth/component/OpenDashboard';
import Topic from '@clvtube/chooseTopic';
import TabBottom from './TabBottom';
import { PodcastDetail } from '@clvtube/podcast-detail/components/index';

import SearchPage from '../../search-page';
import VideoDetailPage from '@clvtube/z-video-details/components/index';
import SplashLoading from '@clvtube/splash-loading';

// 🚀 import Constants from file Constants
import {
  AUTH,
  CREATE_INFO,
  INPUT_OTP,
  INTRO,
  OPENDASHBOARD,
  PODCAST_DETAIL,
  REGISTER_SUCCESS,
  SEARCH_PAGE,
  SPLASH_LOADING,
  TAB_BOTTOM,
  TOPIC,
  VIDEO_DETAILS_PAGE,
} from '../constants/route.constants';

export type RootStackParamList = {
  SplashLoading: {};
  Intro: { navigation: any };
  Auth: { navigation: any };
  OpenDashboard: {};
  InputOTP: { navigation: any; confirmation: any };
  CreateInfo: { navigation: any };
  RegisterSuccess: {};
  Topic: {};
  TabBottom: {};

  Home: {};
  PodcastDetail: {};
  Podcast: {};
  PodcastListWithTopic: {};
  Search: {};
  VideoDetails: {};
  StartDashboard: {};
};

export type IntroProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
export type AuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;
export type CreateInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateInfo'
>;
export type InputOTPProps = NativeStackScreenProps<
  RootStackParamList,
  'InputOTP'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SPLASH_LOADING}>
      {/* ✅ Route Splash */}
      <Stack.Screen
        name={SPLASH_LOADING}
        component={SplashLoading}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Intro */}
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Auth */}
      <Stack.Screen
        name={AUTH}
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={INPUT_OTP}
        component={InputOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={CREATE_INFO}
        component={CreateInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={REGISTER_SUCCESS}
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={OPENDASHBOARD}
        component={OpenDashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PODCAST_DETAIL}
        component={PodcastDetail}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Select Level-Topic */}
      <Stack.Screen
        name={TOPIC}
        component={Topic}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Home-Navigator */}
      <Stack.Screen
        name={TAB_BOTTOM}
        component={TabBottom}
        options={{ headerShown: false }}
      />

      {/* Chưa có Final Design */}
      <Stack.Screen
        name={SEARCH_PAGE}
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={VIDEO_DETAILS_PAGE}
        component={VideoDetailPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
