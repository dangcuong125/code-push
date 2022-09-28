import { useQuery } from 'react-query';
import { getSavedWordDetail } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetSavedWordDetail = (word: string) => {
  return useQuery([QUERY_KEYS.GET_SAVED_WORD_DETAIL, word], () =>
    getSavedWordDetail(word),
  );
};
