import React from 'react';
import { SafeAreaView } from 'react-native';
import { GameItem } from './GameItem';
import { GameListProps } from '../interface';
import { COUNT_DOWN_GAME_SCREEN } from '@clvtube/common/constants/route.constants';
import { resetIndexOfQuestionAndAnswers } from '../../choose-right-word-game/reducer/gameChooseRightWord';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';

export const GameListScreen = ({ navigation }: GameListProps) => {
  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    dispatch(resetIndexOfQuestionAndAnswers());
    navigation.navigate(COUNT_DOWN_GAME_SCREEN);
  };
  return (
    <SafeAreaView>
      <GameItem
        gameDescription="Ôn tập từ vựng bằng cách chọn đáp án đúng"
        gameName={'Dueling'}
        onPress={handleNavigation}
      />
    </SafeAreaView>
  );
};
