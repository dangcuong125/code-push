/* eslint-disable multiline-ternary */
import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { ChooseRightWordGame } from '../../choose-right-word-game/components/index';
import { useCountDown } from '@clvtube/common/hooks/useCountDown';
import { useGetAmountQuestion } from '../hooks/useGetAmountQuestion';
import { getAmountQuestionAndAnswer } from '../../choose-right-word-game/reducer/gameChooseRightWord';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';

export const CountDownScreen = () => {
  const countDown = useCountDown(3, 0);
  const dispatch = useAppDispatch();
  const { data } = useGetAmountQuestion();

  useEffect(() => {
    dispatch(getAmountQuestionAndAnswer(data?.data));
  }, [data?.data]);
  return (
    <SafeAreaView>
      {countDown < 0 ? (
        <ChooseRightWordGame />
      ) : (
        <Box height="100%">
          <Text color="text.200" fontSize="100px" margin="auto">
            {countDown}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};
