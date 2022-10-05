import { Box, Button, Flex, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  COUNT_DOWN_GAME_SCREEN,
  TAB_BOTTOM,
  TAB_ROUTE_GAME,
} from '@clvtube/common/constants/route.constants';
import {
  resetCorrectAnswers,
  resetIndexOfQuestionAndAnswers,
} from '../../choose-right-word-game/reducer/gameChooseRightWord';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';
import { TOTAL_QUESTIONS } from '@clvtube/common/constants/common.constant';

export const GameResult = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const numCorrectAnswer = useAppSelector(
    state => state.gameChooseRightWordReducer.correctAnswers,
  );
  return (
    <SafeAreaView>
      <Flex direction="column">
        <Flex direction="row" justifyContent="flex-end">
          <Text
            color="text.600"
            mr="15px"
            font-size="30px"
            fontWeight={600}
            onPress={() => {
              navigation.navigate(TAB_BOTTOM, { screen: TAB_ROUTE_GAME });
              dispatch(resetCorrectAnswers());
            }}>
            Đóng
          </Text>
        </Flex>
        <Box mt="70px">
          <Text
            color="text.200"
            fontWeight={700}
            fontSize="38px"
            textAlign="center">
            Kết quả
          </Text>
          <Box ml="20px" mt="30px">
            <Text color={'text.200'} fontSize="18px">
              Số đáp án đúng: {numCorrectAnswer?.length}
            </Text>
            <Text color={'text.200'} fontSize="18px">
              Số đáp án không đúng: {TOTAL_QUESTIONS - numCorrectAnswer?.length}
            </Text>
          </Box>
          <Text textAlign="center" color="text.200" fontSize="18px" mt="20px">
            Kết quả {numCorrectAnswer?.length}/{TOTAL_QUESTIONS}
          </Text>
        </Box>
        <Button
          onPress={() => {
            dispatch(resetCorrectAnswers());
            dispatch(resetIndexOfQuestionAndAnswers());
            navigation.navigate(COUNT_DOWN_GAME_SCREEN);
          }}
          width="70%"
          m="auto"
          bgColor="text.600"
          borderRadius="20px"
          mt="70px">
          Chơi lại
        </Button>
      </Flex>
    </SafeAreaView>
  );
};
