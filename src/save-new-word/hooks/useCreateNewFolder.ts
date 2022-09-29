import { useMutation, useQueryClient } from 'react-query';
import { createNewFolderForSavingWord } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useCreateNewFolder = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewFolderForSavingWord, {
    onSettled: () => queryClient.invalidateQueries([QUERY_KEYS.GET_GROUP_LIST]),
  });
};
