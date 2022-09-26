import { useMutation, useQueryClient } from 'react-query';
import { deleteSearchHistoryItem } from '../services';

export const useDeleteHistoryItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteSearchHistoryItem, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
