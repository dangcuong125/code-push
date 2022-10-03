import React from 'react';
import { SafeAreaView } from 'react-native';
import { GameItem } from './GameItem';
import { GameListProps } from '../interface';
import { COUNT_DOWN_GAME_SCREEN } from '@clvtube/common/constants/route.constants';

export const GameListScreen = ({ navigation }: GameListProps) => {
  const handleNavigation = () => {
    navigation.navigate(COUNT_DOWN_GAME_SCREEN, {});
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
