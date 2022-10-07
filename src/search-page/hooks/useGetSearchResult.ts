import { useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getSearchResult } from '../services';

export const useGetSearchResult = (
  keyword: string,
  page: number = 1,
  limit: number = 10,
) => {
  const queryClient = useQueryClient();
  return useQuery(
    [QUERY_KEYS.GET_SEARCH_RESULT, keyword, page, limit],
    () => getSearchResult(keyword, page, limit),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(QUERY_KEYS.GET_SEARCH_HISTORY),
    },
  );
};
