import { useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getSearchResult } from '../services';

export const useGetSearchResult = (query: {
  keyword: string;
  page: number;
  limit: number;
}) => {
  if (!query) query = { keyword: '', page: 1, limit: 10 };
  const { keyword, page, limit } = query;
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
