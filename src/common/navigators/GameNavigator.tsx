import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GAME_LIST_SCREEN } from '../constants/route.constants';
import { GameListScreen } from '@clvtube/game/game-list-screen/components/index';

export type GameStackParamList = {
  GameListScreen: {};
};

const Stack = createNativeStackNavigator<GameStackParamList>();

export const GameNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={GAME_LIST_SCREEN}>
      <Stack.Screen
        name={GAME_LIST_SCREEN}
        component={GameListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
