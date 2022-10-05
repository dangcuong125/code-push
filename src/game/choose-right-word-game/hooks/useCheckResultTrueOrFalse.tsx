import { useQuery } from 'react-query';
import { checkResultTrueOrFalse } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useCheckResultTrueOrFalse = (
  answer: string,
  id: number | boolean,
) => {
  return useQuery(
    [QUERY_KEYS.GAME_CHOOSE_RIGHT_WORD_CHECK_RESULT_TRUE_OR_FALSE, answer, id],
    () => checkResultTrueOrFalse(answer, id),
  );
};
