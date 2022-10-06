/* eslint-disable multiline-ternary */
import { Box, Button, Text } from 'native-base';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import {
  countCorrectAnswer,
  getCorrectAnswer,
  listenAnswerIsChosen,
  listenClickEvent,
  setIndexOfQuestionAndAnswers,
} from '../reducer/gameChooseRightWord';
import * as lodash from 'lodash';
import { useGetCorrectAnswer } from '../hooks/useGetCorrectAnswer';
import { useNavigation } from '@react-navigation/native';
import { RESULT_OF_CHOOSE_RIGHT_WORD_GAME } from '@clvtube/common/constants/route.constants';
import { TOTAL_QUESTIONS_OF_GAME_CHOOSE_RIGHT_WORD } from '@clvtube/common/constants/common.constants';

export const QuestionAndAnswers = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const index = useAppSelector(state => state.gameChooseRightWordReducer.index);
  const questionAndAnswers = useAppSelector(
    state => state.gameChooseRightWordReducer.questionAndAnswers,
  );

  const checkIdQuestionAndAnswersNotEmpty =
    !lodash.isEmpty(questionAndAnswers) && questionAndAnswers?.id;

  const { data } = useGetCorrectAnswer(checkIdQuestionAndAnswersNotEmpty);

  if (index === TOTAL_QUESTIONS_OF_GAME_CHOOSE_RIGHT_WORD) {
    setTimeout(() => {
      navigation.navigate(RESULT_OF_CHOOSE_RIGHT_WORD_GAME);
    }, 1000);
  }

  useEffect(() => {
    dispatch(getCorrectAnswer(data?.data));
  }, [data?.data]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(listenClickEvent());
    }, 1000);
  }, [index]);
  return (
    <Box mt="70px">
      <Text color="text.600" textAlign={'center'} fontSize="25px">
        {!lodash.isEmpty(questionAndAnswers) && questionAndAnswers?.question}
      </Text>
      <Box mt="20px">
        {!lodash.isEmpty(questionAndAnswers) &&
          questionAndAnswers?.answers?.map((answer, index: number) => (
            <>
              <Button
                m="auto"
                width="70%"
                key={index}
                _text={{ textAlign: 'center' }}
                onPress={() => {
                  if (answer?.answerInfo?.content === data?.data) {
                    dispatch(countCorrectAnswer(true));
                  }
                  dispatch(listenAnswerIsChosen(answer?.answerInfo?.content));
                  dispatch(listenClickEvent());
                  dispatch(setIndexOfQuestionAndAnswers(1));
                }}
                mt="10px"
                bgColor={
                  answer?.answerInfo.isClicked
                    ? answer?.answerInfo?.bgColor
                    : 'text.600'
                }>
                {answer?.answerInfo?.content}
              </Button>
            </>
          ))}
      </Box>
    </Box>
  );
};
