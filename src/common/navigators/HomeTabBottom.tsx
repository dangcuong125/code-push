import React from 'react';

// import component from package
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import component from pages
import HomePage from '@clvtube/home/index/components/index';
import VideoRoute from './VideoNavigator';
import Account from '@clvtube/home/account';
import { PodcastRoutes } from './Podcast';

const Tab = createBottomTabNavigator();

const HomeTabBottom = () => {
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
        },
      }}>
      {/* Page Home Index */}
      <Tab.Screen
        name="Trang chủ"
        component={HomePage}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => {
            return <Feather name="home" color={color} size={25} />;
          },
        }}
      />

      {/* Page Home Video*/}
      <Tab.Screen
        name="Video"
        component={VideoRoute}
        options={{
          tabBarIcon: ({ color }) => {
            return <Octicons name="video" color={color} size={25} />;
          },
        }}
      />

      {/* Page Home Podcast */}
      <Tab.Screen
        name="Podcast"
        component={PodcastRoutes}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="podcast" color={color} size={25} />
            );
          },
        }}
      />

      {/* Page Home Account */}
      <Tab.Screen
        name="Tài khoản"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={25}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabBottom;
