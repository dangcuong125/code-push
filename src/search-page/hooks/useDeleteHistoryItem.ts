import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSearchHistoryItem } from '../services';

export const useDeleteHistoryItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteSearchHistoryItem, {
    onMutate: async (id: number) => {
      queryClient.cancelQueries(QUERY_KEYS.GET_SEARCH_HISTORY);
      const prevData = queryClient.getQueryData(QUERY_KEYS.GET_SEARCH_HISTORY);
      const newData = prevData?.data.filter(item => item?.id !== id);
      queryClient.setQueriesData(QUERY_KEYS.GET_SEARCH_HISTORY, {
        ...prevData,
        data: [...newData],
      });
      return { prevData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_err, _, context) => {
      queryClient.setQueriesData(
        QUERY_KEYS.GET_SEARCH_HISTORY,
        context?.prevData,
      );
    },
  });
};
