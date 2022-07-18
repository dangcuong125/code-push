import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '@clvtube/home/index/components/index';

import { HOME_ROUTE } from '../constants/route.constants';
import SearchPage from '@clvtube/search-page';

export type HomeStackParamList = {
  Index: {};
  Search: {};
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeRoute = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_ROUTE.INDEX}>
      <Stack.Screen
        name={HOME_ROUTE.INDEX}
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={HOME_ROUTE.SEARCH}
        component={SearchPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoute;
