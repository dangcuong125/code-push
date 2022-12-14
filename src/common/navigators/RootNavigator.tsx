// 🚀 import Component from package
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

// 🚀 import Components from Pages
import Auth from '@clvtube/auth';
import CreateAccount from '@clvtube/auth/component/CreateAccount';
import InputOTP from '@clvtube/auth/component/InputOTP';
import OpenDashboard from '@clvtube/auth/component/OpenDashboard';
import RegisterSuccess from '@clvtube/auth/component/RegisterSuccess';
import LevelTopic from '@clvtube/level-topic';
import Intro from '@clvtube/intro/component/Intro';
import { PodcastDetail } from '@clvtube/podcast-detail/components/index';
import PlayingVideo from '@clvtube/video-detail/playingVideo';
import { SaveNewWord } from '@clvtube/save-new-word/components/index';
import { DisplaySavedWordList } from '@clvtube/save-new-word/components/DisplaySavedWordList';
import { CountDownScreen } from '@clvtube/game/count-down-screen/components/index';
import { ResultOfGameChooseRightWord } from '@clvtube/game/game-result/components/ResultOfGameChooseWord';
import { DragWordGame } from '@clvtube/game/drag-word-game/components/index';
import { ResultOfGameDragWord } from '@clvtube/game/game-result/components/ResultOfGameDragWord';

import TabBottom from './TabBottom';

import SplashLoading from '@clvtube/splash-loading';

// 🚀 import Constants from file Constants
import {
  AUTH,
  COUNT_DOWN_GAME_SCREEN,
  CREATE_ACCOUNT,
  GAME_DRAG_WORD,
  INPUT_OTP,
  INTRO,
  LEVEL_TOPIC,
  OPENDASHBOARD,
  PODCAST_DETAIL,
  REGISTER_SUCCESS,
  RESULT_OF_CHOOSE_RIGHT_WORD_GAME,
  RESULT_OF_DRAG_WORD_GAME,
  SAVED_WORD_LIST,
  SAVE_NEW_WORD,
  SPLASH_LOADING,
  TAB_BOTTOM,
  VIDEO_ROUTE,
} from '../constants/route.constants';

export type RootStackParamList = {
  SplashLoading: {};
  Intro: { navigation: any };
  Auth: {};
  OpenDashboard: {};
  InputOTP: { navigation: any; phoneNumber: any; messageCode: any };
  CreateAccount: {};
  RegisterSuccess: {};
  LevelTopic: {};
  TabBottom: {};
  SaveNewWord: {};
  CountDownGameScreen: {};
  SaveWordList: {};
  Home: {};
  GameResult: {};
  GameDragWord: {};
  PodcastDetail: {};
  Podcast: {};
  PodcastListWithTopic: {};
  Search: {};
  VideoDetails: {};
  StartDashboard: {};
  GameListScreen: {};
};

export type InputOTPProps = NativeStackScreenProps<
  RootStackParamList,
  'InputOTP'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SPLASH_LOADING}>
      {/* ✅ Route Splash */}
      <Stack.Screen
        name={SPLASH_LOADING}
        component={SplashLoading}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Intro */}
      <Stack.Screen
        name={INTRO}
        component={Intro}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Auth */}
      <Stack.Screen
        name={AUTH}
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={INPUT_OTP}
        component={InputOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={CREATE_ACCOUNT}
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={REGISTER_SUCCESS}
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={OPENDASHBOARD}
        component={OpenDashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PODCAST_DETAIL}
        component={PodcastDetail}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Select Level-Topic */}
      <Stack.Screen
        name={LEVEL_TOPIC}
        component={LevelTopic}
        options={{ headerShown: false }}
      />

      {/* ✅ Route Tab_Bottom */}
      <Stack.Screen
        name={TAB_BOTTOM}
        component={TabBottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={VIDEO_ROUTE.VIDEO_PLAYING}
        component={PlayingVideo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SAVE_NEW_WORD}
        component={SaveNewWord}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SAVED_WORD_LIST}
        component={DisplaySavedWordList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={COUNT_DOWN_GAME_SCREEN}
        component={CountDownScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RESULT_OF_CHOOSE_RIGHT_WORD_GAME}
        component={ResultOfGameChooseRightWord}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={GAME_DRAG_WORD}
        component={DragWordGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RESULT_OF_DRAG_WORD_GAME}
        component={ResultOfGameDragWord}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
