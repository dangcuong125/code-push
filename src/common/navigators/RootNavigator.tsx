// 🚀 import Component from package
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

// 🚀 import Components from Pages
import Auth from '@clvtube/auth';
import CreateAccount from '@clvtube/auth/component/CreateAccount';
import InputOTP from '@clvtube/auth/component/InputOTP';
import OpenDashboard from '@clvtube/auth/component/OpenDashboard';
import RegisterSuccess from '@clvtube/auth/component/RegisterSuccess';
import Intro from '@clvtube/intro/component/Intro';
import { PodcastDetail } from '@clvtube/podcast-detail/components/index';
import LevelTopic from '../../level-topic/index';
import TabBottom from './TabBottom';

import SplashLoading from '@clvtube/splash-loading';

// 🚀 import Constants from file Constants
import {
  AUTH,
  CREATE_ACCOUNT,
  INPUT_OTP,
  INTRO,
  LEVEL_TOPIC,
  OPENDASHBOARD,
  PODCAST_DETAIL,
  REGISTER_SUCCESS,
  SPLASH_LOADING,
  TAB_BOTTOM,
} from '../constants/route.constants';

export type RootStackParamList = {
  SplashLoading: {};
  Intro: { navigation: any };
  Auth: { navigation: any };
  OpenDashboard: {};
  InputOTP: { navigation: any; confirmation: any };
  CreateAccount: { navigation: any };
  RegisterSuccess: {};
  LevelTopic: {};
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
        name={CREATE_ACCOUNT}
        component={CreateAccount}
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
        name={LEVEL_TOPIC}
        component={LevelTopic}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Tab_Bottom */}
      <Stack.Screen
        name={TAB_BOTTOM}
        component={TabBottom}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
