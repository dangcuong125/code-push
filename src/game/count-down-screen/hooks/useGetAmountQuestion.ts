import { useQuery } from 'react-query';
import { getAmountQuestion } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetAmountQuestion = (amount: number = 10) => {
  return useQuery(
    [QUERY_KEYS.GET_AMOUNT_QUESTION_FOR_GAME_CHOOSE_RIGHT_WORD],
    () => getAmountQuestion(amount),
  );
};
