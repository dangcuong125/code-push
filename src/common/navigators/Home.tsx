import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

import HomePage from '@clvtube/home/index/components/index'
import Video from '@clvtube/home/video'
import Podcast from '@clvtube/home/podcast/components/index'
import Account from '@clvtube/home/account'



const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0E3C9E',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          height: 200,
        }
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomePage}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => {
            return <Feather name="home" color={color} size={25} />
          },
        }}
      />

      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons name="video" color={color} size={25} />
          },
        }}
      />

      <Tab.Screen
        name="Podcast"
        component={Podcast}
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="podcast" color={color} size={25} />
          },
        }}
      />

      <Tab.Screen
        name="Tài khoản"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="account-circle" color={color} size={25} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
