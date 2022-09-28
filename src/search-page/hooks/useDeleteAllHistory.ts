import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAllSearchHistoryItem } from '../services';

export const useDeleteAllHistoryItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllSearchHistoryItem, {
    onMutate: async () => {
      await queryClient.cancelQueries(QUERY_KEYS.GET_SEARCH_HISTORY);
      const previousData = queryClient.getQueryData(
        QUERY_KEYS.GET_SEARCH_HISTORY,
      );
      queryClient.setQueryData(QUERY_KEYS.GET_SEARCH_HISTORY, []);
      return { previousData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(
        QUERY_KEYS.GET_SEARCH_HISTORY,
        context?.previousData,
      );
    },
  });
};
