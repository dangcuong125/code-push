import { useQuery } from 'react-query';
import { getCorrectAnswer } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetCorrectAnswer = (id: number | boolean | undefined) => {
  return useQuery(
    [QUERY_KEYS.GAME_CHOOSE_RIGHT_WORD_GET_CORRECT_ANSWER, id],
    () => getCorrectAnswer(id),
  );
};
