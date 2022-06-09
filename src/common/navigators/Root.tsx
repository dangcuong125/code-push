import React from 'react'

import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import Intro from '@clvtube/components/intro/component/Intro'
import Home from '../../common/navigators/Home'
import SearchPage from '../../components/search'


type RootStackParamList = {
  Login: { navigation: any }
  InputOTP: { confirmation: any }
  Intro: {}
  Home: {}
  Search: {}

}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
export type InputOTPProps = NativeStackScreenProps<RootStackParamList, 'InputOTP'>

const Stack = createNativeStackNavigator<RootStackParamList>()

const Root = () => {
  return (
    <Stack.Navigator initialRouteName={'Intro'}>
      <Stack.Screen
        name='Intro'
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Root
