import { useQuery } from 'react-query';
import { getCorrectAnswerForDragWordGame } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetCorrectAnswerForDragWordGame = (id: number) => {
  return useQuery([QUERY_KEYS.GAME_DRAG_WORD_GET_CORRECT_ANSWER, id], () =>
    getCorrectAnswerForDragWordGame(id),
  );
};
