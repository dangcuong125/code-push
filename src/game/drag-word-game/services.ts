import {
  GAME_DRAG_WORD_AMOUNT_QUESTION,
  GAME_DRAG_WORD_GET_CORRECT_ANSWER,
} from '@clvtube/common/constants/urlApi.constants';
import { axiosClient } from '@clvtube/common/lib/request';

export const getAmountQuestionForDragWordGame = (amount: number) => {
  return axiosClient.get(`${GAME_DRAG_WORD_AMOUNT_QUESTION}/${amount}`);
};
export const getCorrectAnswerForDragWordGame = (id: number) => {
  return axiosClient.get(`${GAME_DRAG_WORD_GET_CORRECT_ANSWER}/${id}`);
};
