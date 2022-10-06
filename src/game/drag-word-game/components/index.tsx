/* eslint-disable multiline-ternary */
import React, { useEffect, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DuoDragDrop, { Word } from '@jamsch/react-native-duo-drag-drop';
import { SafeAreaView, View } from 'react-native';
import { useGetAmountQuestionDragWordGame } from '../hooks/useGetAmountQuestionDragWordGame';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import * as lodash from 'lodash';
import { Button, Icon, useToast } from 'native-base';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  countCorrectAnswers,
  finishCheckingAnswer,
  getIdToastCorrect,
  getIdToastInCorrect,
  setBgColorForButtonNext,
  setIndexOfQuestion,
} from '../reducer/gameDragWord';
import { useGetCorrectAnswerForDragWordGame } from '../hooks/useGetCorrectAnswerForDragWordGame';
import { CorrectToast } from './CorrectToast';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InCorrectOrValidateToast } from './InCorrectOrValidateToast';
import { RESULT_OF_DRAG_WORD_GAME } from '@clvtube/common/constants/route.constants';

export const DragWordGame = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const ref = useRef();
  const indexOfQuestion = useAppSelector(
    state => state.gameDragWordReducer.indexOfQuestion,
  );
  console.log('indexOfQuestion', indexOfQuestion);

  const isFinishChecking = useAppSelector(
    state => state.gameDragWordReducer.isFinishChecking,
  );
  const idToastCorrect = useAppSelector(
    state => state.gameDragWordReducer.idToastCorrect,
  );
  const idToastInCorrect = useAppSelector(
    state => state.gameDragWordReducer.idToastInCorrect,
  );
  const bgColorForBtnNext = useAppSelector(
    state => state.gameDragWordReducer.bgColorOfButtonNext,
  );
  const lastIndexOfQuestions = 9;

  const { data: amountQuestions } = useGetAmountQuestionDragWordGame();
  const { data: correctAnswer } = useGetCorrectAnswerForDragWordGame(
    amountQuestions?.data[indexOfQuestion]?.id,
  );

  const checkWordIsEmpty = !lodash.isEmpty(
    amountQuestions?.data[indexOfQuestion]?.words,
  )
    ? amountQuestions?.data[indexOfQuestion]?.words
    : [];

  const handleCheckAnswer = () => {
    const answered = ref.current?.getAnsweredWords();
    const answeredIsConverted = answered?.join(' ')?.toString();
    if (answered?.length === 0) {
      toast.show({
        render: () => (
          <InCorrectOrValidateToast content={'Bạn chưa điền đáp án!'} />
        ),
        duration: 800,
      });
      return;
    }

    if (answeredIsConverted === correctAnswer?.data) {
      dispatch(countCorrectAnswers(true));
      dispatch(setBgColorForButtonNext('#28A745'));
      const idToastCorrect = toast.show({
        render: () => <CorrectToast />,
        placement: 'top',
      });
      dispatch(finishCheckingAnswer(true));
      dispatch(getIdToastCorrect(idToastCorrect));
    } else {
      dispatch(setBgColorForButtonNext('#DC3545'));
      const idToastInCorrect = toast.show({
        render: () => (
          <InCorrectOrValidateToast
            content={`Đáp án đúng: ${correctAnswer?.data}`}
          />
        ),
      });
      dispatch(finishCheckingAnswer(true));
      dispatch(getIdToastInCorrect(idToastInCorrect));
    }
  };

  useEffect(() => {
    toast.close(idToastCorrect);
    toast.close(idToastInCorrect);
    dispatch(finishCheckingAnswer(false));
  }, [indexOfQuestion]);
  return (
    <SafeAreaView>
      <Icon
        as={AntDesign}
        color="text.600"
        size="6"
        marginLeft="17.67px"
        name="arrowleft"
        onPress={navigation.goBack}
      />
      <GestureHandlerRootView>
        <View style={{ marginTop: 50, height: 400 }}>
          <DuoDragDrop
            wordHeight={45}
            renderWord={() => (
              <Word
                containerStyle={{
                  backgroundColor: '#3D9BE0',
                }}
                textStyle={{
                  color: '#FFFFFF',
                }}
              />
            )}
            ref={ref}
            words={checkWordIsEmpty}
          />
        </View>
        {!isFinishChecking ? (
          <Button
            bgColor="text.600"
            mt="100px"
            m="auto"
            borderRadius="10px"
            width="70%"
            height="50px"
            onPress={handleCheckAnswer}>
            Kiểm tra
          </Button>
        ) : (
          <Button
            bgColor={bgColorForBtnNext}
            mt="100px"
            m="auto"
            borderRadius="10px"
            width="70%"
            height="50px"
            onPress={() => {
              if (indexOfQuestion === lastIndexOfQuestions) {
                navigation.navigate(RESULT_OF_DRAG_WORD_GAME);
              }
              dispatch(setIndexOfQuestion(1));
            }}>
            Tiếp tục
          </Button>
        )}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
