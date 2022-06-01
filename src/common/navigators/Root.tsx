import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
// import Home from './Home';
import InputOTP from '@clvtube/components/auth/InputOTP'
// import Login from '@clvtube/components/auth/Login'
import HomePage from '../../components/home/home-page/index'
import Home from '../../common/navigators/Home'
import { SafeAreaView } from 'react-native'
import { Text } from 'native-base'
import SearchPage from '../../components/search'



type RootStackParamList = {
  Login: { navigation: any }
  InputOTP: { confirmation: any }
  Home: {}
  SearchPage: {}
}

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
export type InputOTPProps = NativeStackScreenProps<
  RootStackParamList,
  'InputOTP'
>

const Stack = createNativeStackNavigator<RootStackParamList>()
const Root = () => {
  return (
    // <SafeAreaView>
    //   <Home />
    // </SafeAreaView>
    <Stack.Navigator initialRouteName={'Home'}>
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
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen
        name={'InputOTP'}
        component={InputOTP}
        options={{ title: 'Input OTP', headerBackTitle: '' }}
      /> */}
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  )
}

export default Root
