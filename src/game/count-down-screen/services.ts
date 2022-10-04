import { axiosClient } from '@clvtube/common/lib/request/index';
import { GAME_CHOOSE_RIGHT_WORD_AMOUNT_QUESTION } from '@clvtube/common/constants/urlApi.constants';

export const getAmountQuestion = (amount: number) => {
  return axiosClient.get(GAME_CHOOSE_RIGHT_WORD_AMOUNT_QUESTION + amount);
};
