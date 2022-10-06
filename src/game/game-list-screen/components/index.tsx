import React from 'react';
import { SafeAreaView } from 'react-native';
import { GameItem } from './GameItem';
import { GameListProps } from '../interface';
import {
  COUNT_DOWN_GAME_SCREEN,
  GAME_DRAG_WORD,
} from '@clvtube/common/constants/route.constants';
import { resetIndexOfQuestionAndAnswers } from '../../choose-right-word-game/reducer/gameChooseRightWord';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { resetIndexOfQuestionDragWordGame } from '../../drag-word-game/reducer/gameDragWord';

export const GameListScreen = ({ navigation }: GameListProps) => {
  const dispatch = useAppDispatch();

  const handleNavigationGameChooseRightWord = () => {
    dispatch(resetIndexOfQuestionAndAnswers());
    navigation.navigate(COUNT_DOWN_GAME_SCREEN);
  };
  return (
    <SafeAreaView>
      <GameItem
        gameDescription="Ôn tập từ vựng bằng cách chọn đáp án đúng"
        gameName={'Dueling'}
        onPress={handleNavigationGameChooseRightWord}
      />
      <GameItem
        gameDescription="Ôn tập từ vựng bằng cách chọn đáp án đúng"
        gameName={'Drag Word'}
        marginTop="70px"
        onPress={() => {
          dispatch(resetIndexOfQuestionDragWordGame());
          navigation.navigate(GAME_DRAG_WORD);
        }}
      />
    </SafeAreaView>
  );
};
