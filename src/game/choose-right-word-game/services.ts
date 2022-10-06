import { axiosClient } from '@clvtube/common/lib/request';
import {
  GAME_CHOOSE_RIGHT_WORD_GET_RIGHT_ANSWER,
  GAME_CHOOSE_RIGHT_WORD_RESULT,
} from '@clvtube/common/constants/urlApi.constants';

export const checkResultTrueOrFalse = (
  answer: string,
  id: number | boolean,
) => {
  return axiosClient.get(GAME_CHOOSE_RIGHT_WORD_RESULT, {
    params: {
      answer,
      id,
    },
  });
};
export const getCorrectAnswer = (id: number | boolean | undefined) => {
  return axiosClient.get(`${GAME_CHOOSE_RIGHT_WORD_GET_RIGHT_ANSWER}/${id}`);
};
