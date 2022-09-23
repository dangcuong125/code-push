import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getSearchResult } from '../services';

export const useGetSearchResult = (
  keyword: string,
  page: number = 1,
  limit: number = 10,
) => {
  return useQuery([QUERY_KEYS.GET_SEARCH_RESULT, keyword, page, limit], () =>
    getSearchResult(keyword, page, limit),
  );
};
