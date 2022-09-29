import { useMutation, useQueryClient } from 'react-query';
import { deleteSavedWord } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useDeleteSavedWord = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteSavedWord, {
    onSettled: () =>
      queryClient.invalidateQueries([QUERY_KEYS.GET_SAVED_WORD_LIST]),
  });
};
