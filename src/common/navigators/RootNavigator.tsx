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
import HomeTabBottom from './HomeTabBottom';

import SearchPage from '../../search';
import VideoDetailPage from '@clvtube/z-video-details/components/index';

// 🚀 import Constants from file Constants
import {
  AUTH,
  CREATE_INFO,
  HOME_NAVIGATOR,
  INPUT_OTP,
  INTRO,
  OPENDASHBOARD,
  REGISTER_SUCCESS,
  SEARCH_PAGE,
  TOPIC,
  VIDEO_DETAILS_PAGE,
} from '../constants/route.constants';


export type RootStackParamList = {
  Intro: { navigation: any };
  Auth: { navigation: any };
  OpenDashboard: {};
  InputOTP: { navigation: any; confirmation: any };
  CreateInfo: { navigation: any };
  RegisterSuccess: {};
  Topic: {};
  HomeNavigator: {};

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
    <Stack.Navigator initialRouteName={HOME_NAVIGATOR}>
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

      {/* ✅ Route Select Level-Topic */}
      <Stack.Screen
        name={TOPIC}
        component={Topic}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Home-Navigator */}
      <Stack.Screen
        name={HOME_NAVIGATOR}
        component={HomeTabBottom}
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
