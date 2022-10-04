/* eslint-disable multiline-ternary */
import { Box, Button, Text } from 'native-base';
import React from 'react';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { setIndex } from '../reducer/gameChooseRightWord';
import * as lodash from 'lodash';

export const QuestionAndAnswers = () => {
  const dispatch = useAppDispatch();

  const index = useAppSelector(state => state.gameChooseRightWordReducer.index);
  const questionAndAnswers = useAppSelector(
    state => state.gameChooseRightWordReducer.amountQuestionAndAnswers,
  );
  return (
    <Box mt="70px">
      <Text color="text.600" textAlign={'center'} fontSize="25px">
        {!lodash.isEmpty(questionAndAnswers) && questionAndAnswers[index]?.word}
      </Text>
      <Box mt="20px">
        {!lodash.isEmpty(questionAndAnswers) &&
          questionAndAnswers[index]?.answers?.map(
            (answer: string, index: number) => (
              <Button
                m="auto"
                width="70%"
                height="50px"
                key={index}
                _text={{ textAlign: 'center' }}
                onPress={() => dispatch(setIndex(1))}
                mt="10px"
                bgColor="text.600">
                {answer}
              </Button>
            ),
          )}
      </Box>
    </Box>
  );
};
