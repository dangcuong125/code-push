import React from 'react'

import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import Intro from '@clvtube/intro/component/Intro'
import StartDashboard from '@clvtube/level-topic/component/StartDashboard'
import Topic from '@clvtube/level-topic/component/Topic'
import Login from '@clvtube/login/component/Login'
import VideoDetailPage from '@clvtube/video-details/components/index'
import Home from '../../common/navigators/Home'
import SearchPage from '../../search'
// import Login from '@clvtube/auth/Login'
// import InputOTP from '../../auth/InputOTP';
import InputOTP from '@clvtube/login/component/InputOTP'

import {
  HOME_PAGE, INPUT_OTP, INTRO, LOGIN, SEARCH_PAGE, START_DASHBOARD, TOPIC, VIDEO_DETAILS_PAGE
} from '../constants/route.constants'


export type RootStackParamList = {
  Login: { navigation: any }
  InputOTP: { confirmation: any }
  Intro: {}
  Home: {}
  Search: {}
  VideoDetails: {}
  Topic: {}
  StartDashboard: {}
  // Login: {}
}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
export type InputOTPProps = NativeStackScreenProps<
  RootStackParamList,
  'InputOTP'
>

const Stack = createNativeStackNavigator<RootStackParamList>()

const Root = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN}>

      <Stack.Screen 
        name={LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name={INPUT_OTP}
        component={InputOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={HOME_PAGE}
        component={Home}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name={TOPIC}
        component={Topic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={START_DASHBOARD}
        component={StartDashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Root
