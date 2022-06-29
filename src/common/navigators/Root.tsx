// import Component from package
import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// import Components from Pages
import Intro from '@clvtube/intro/component/Intro';
import Auth from '@clvtube/auth';
import InputOTP from '@clvtube/auth/component/InputOTP';
import CreateInfo from '@clvtube/auth/component/CreateInfo';
import RegisterSuccess from '@clvtube/auth/component/RegisterSuccess';
import OpenDashboard from '@clvtube/auth/component/OpenDashboard';
import Topic from '@clvtube/level-topic/component/Topic';
import Home from './Home';

import SearchPage from '../../search';
import VideoDetailPage from '@clvtube/video-details/components/index';

// import Constants from file.Constants.Route
import {
  AUTH,
  CREATE_INFO,
  HOME,
  INPUT_OTP,
  INTRO,
  OPENDASHBOARD,
  REGISTER_SUCCESS,
  SEARCH_PAGE,
  TOPIC,
  VIDEO_DETAILS_PAGE,
} from '../constants/route.constants';

export type RootStackParamList = {
  Intro: {};
  Auth: { navigation: any };
  OpenDashboard: {};
  InputOTP: { navigation: any; confirmation: any };
  CreateInfo: { navigation: any };
  RegisterSuccess: {};
  Topic: {};
  Home: {};

  Search: {};
  VideoDetails: {};
  StartDashboard: {};
};

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

const Root = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      {/* Route Intro */}
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{ headerShown: false }}
      />

      {/* Route Auth */}
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

      {/* Route Select Level-Topic */}
      <Stack.Screen
        name={TOPIC}
        component={Topic}
        options={{ headerShown: false }}
      />

      {/* Route Home */}
      <Stack.Screen
        name={HOME}
        component={Home}
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

export default Root;
