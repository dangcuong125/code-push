import React from 'react';

// import component from package
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import component from pages
import VideoRoute from './VideoNavigator';
import HomeRoute from './HomeNavigator';
import { PodcastRoutes } from './Podcast';
import AccountRoute from './AccountNavigator';
import { imageIconTab } from '../constants/imagePath';
import { Image } from 'native-base';
// import { GameListScreen } from '@clvtube/game/game-list-screen/components/index';
import { GameNavigator } from './GameNavigator';
import { TAB_ROUTE_GAME } from '../constants/route.constants';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Trang chủ') {
            iconName = focused ? imageIconTab.HOME_ACTIVE : imageIconTab.HOME;
          } else if (route.name === 'Video') {
            iconName = focused ? imageIconTab.VIDEO_ACTIVE : imageIconTab.VIDEO;
          } else if (route.name === 'Podcast') {
            iconName = focused
              ? imageIconTab.PODCAST_ACTIVE
              : imageIconTab.PODCAST;
          } else if (route.name === 'Tài khoản') {
            iconName = focused
              ? imageIconTab.ACCOUNT_ACTIVE
              : imageIconTab.ACCOUNT;
          }
          return (
            <Image
              source={iconName}
              height={'22px'}
              width={'22px'}
              alt={'image'}
            />
          );
        },
        headerShown: false,
        headerStyle: {
          height: 56,
          fontSize: '24px',
        },
        tabBarStyle: {
          backgroundColor: 'white',
          fontSize: '24px',
        },
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#0E3C9E',
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      })}>
      {/* TabBar Home */}
      <Tab.Screen name="Trang chủ" component={HomeRoute} />

      {/* TabBar Video */}
      <Tab.Screen name="Video" component={VideoRoute} />

      {/* TabBar PodCast */}
      <Tab.Screen name="Podcast" component={PodcastRoutes} />

      {/* TabBar Account */}
      <Tab.Screen
        options={{ title: 'Trò chơi' }}
        name={TAB_ROUTE_GAME}
        component={GameNavigator}
      />
      <Tab.Screen name="Tài khoản" component={AccountRoute} />
    </Tab.Navigator>
  );
};

export default TabBottom;
