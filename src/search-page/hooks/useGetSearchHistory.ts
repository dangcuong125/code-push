import { useQuery } from 'react-query';
import { getSearchHistory } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetSearchHistory = (size: number = 100) => {
  return useQuery([QUERY_KEYS.GET_SEARCH_HISTORY], () =>
    getSearchHistory(size),
  );
};
