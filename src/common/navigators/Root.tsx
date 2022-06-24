import React from 'react'

// import Component from package
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

// import Components from Pages
import Intro from '@clvtube/intro/component/Intro'
import Login from '@clvtube/auth/login/component/Login'
import OpenDashboard from '@clvtube/auth/login/component/OpenDashboard'
import CreateInfo from '@clvtube/auth/register/component/CreateInfo'
import InputOTP from '@clvtube/auth/register/component/InputOTP'
import Register from '@clvtube/auth/register/component/Register'
import RegisterSuccess from '@clvtube/auth/register/component/RegisterSuccess'
import Topic from '@clvtube/level-topic/component/Topic'
import Home from './Home'

import SearchPage from '../../search'
import VideoDetailPage from '@clvtube/video-details/components/index'

// import Constants from file Constants Route
import {
  CREATE_INFO,
  HOME,
  INPUT_OTP,
  INTRO,
  LOGIN,
  OPENDASHBOARD,
  REGISTER,
  REGISTER_SUCCESS,
  SEARCH_PAGE,
  TOPIC,
  VIDEO_DETAILS_PAGE,
} from '../constants/route.constants'

export type RootStackParamList = {
  Intro: {}
  Login: { navigation: any }
  OpenDashboard: {}
  Register: { navigation: any }
  InputOTP: { navigation: any; confirmation: any }
  CreateInfo: {}
  RegisterSuccess: {}
  Topic: {}
  Home: {}

  Search: {}
  VideoDetails: {}
  StartDashboard: {}
}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
export type RegisterProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>
export type InputOTPProps = NativeStackScreenProps<
  RootStackParamList,
  'InputOTP'
>

const Stack = createNativeStackNavigator<RootStackParamList>()

const Root = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      {/* Route Intro */}
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{ headerShown: false }}
      />

      {/* Route Auth - Login */}
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={OPENDASHBOARD}
        component={OpenDashboard}
        options={{ headerShown: false }}
      />

      {/* Route Auth - Register */}
      <Stack.Screen
        name={REGISTER}
        component={Register}
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
  )
}

export default Root
