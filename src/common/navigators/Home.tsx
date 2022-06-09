import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomePage from '@clvtube/components/home/home-page/index';
import HomeVideo from '@clvtube/components/home/home-video';


const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <Tab.Navigator
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
    </Tab.Navigator>
  )
}

export default Home
