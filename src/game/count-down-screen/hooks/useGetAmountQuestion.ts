import { useQuery } from 'react-query';
import { getAmountQuestion } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { TOTAL_QUESTIONS_OF_GAME_CHOOSE_RIGHT_WORD } from '@clvtube/common/constants/common.constants';

export const useGetAmountQuestion = (
  amount: number = TOTAL_QUESTIONS_OF_GAME_CHOOSE_RIGHT_WORD,
) => {
  return useQuery(
    [QUERY_KEYS.GET_AMOUNT_QUESTION_FOR_GAME_CHOOSE_RIGHT_WORD],
    () => getAmountQuestion(amount),
  );
};
