import { useQuery } from 'react-query';
import { getAmountQuestionForDragWordGame } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { TOTAL_QUESTIONS_OF_GAME_DRAG_WORDS } from '@clvtube/common/constants/common.constants';

export const useGetAmountQuestionDragWordGame = (
  amount: number = TOTAL_QUESTIONS_OF_GAME_DRAG_WORDS,
) => {
  return useQuery([QUERY_KEYS.GAME_DRAG_WORD_GET_AMOUNT_QUESTION, amount], () =>
    getAmountQuestionForDragWordGame(amount),
  );
};
