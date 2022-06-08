import React from 'react'
<<<<<<< HEAD

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomePage from '@clvtube/components/home/home-page/index';
import HomeVideo from '@clvtube/components/home/home-video';

=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '@clvtube/components/home/home-page/index'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeVideo from '@clvtube/components/home/home-video'
import HomePodcast from '@clvtube/components/home/home-podcast/index'
>>>>>>> test

const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <Tab.Navigator
<<<<<<< HEAD
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: 'transparent',
            }
        }}
    >
        <Tab.Screen 
            name="Trang chủ" 
            component={HomePage} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <AntDesign name="home" size={20} />
                    )
                }
            }}
        />

        <Tab.Screen 
            name="Video" 
            component={HomeVideo} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <AntDesign name="videocamera" size={20} />
                    )
                }
            }}
        />

        <Tab.Screen 
            name="Podcast" 
            component={HomePage} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <FontAwesome name="podcast" size={20} />
                    )
                }
            }}
        />

        <Tab.Screen 
            name="Tài khoản" 
            component={HomePage} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <AntDesign name="user" size={20} />
                    )
                }
            }}
        />
=======
      //   initialRouteNames={"Trang chủ"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="search1" size={20} />
          },
        }}
      />

      <Tab.Screen
        name="Video"
        component={HomeVideo}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="search1" size={20} />
          },
        }}
      />

      <Tab.Screen
        name="Podcast"
        component={HomePodcast}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="search1" size={20} />
          },
        }}
      />

      <Tab.Screen
        name="Tài khoản"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="search1" size={20} />
          },
        }}
      />
>>>>>>> test
    </Tab.Navigator>
  )
}

export default Home
