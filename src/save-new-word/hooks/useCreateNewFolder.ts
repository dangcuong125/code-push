import { useMutation, useQueryClient } from 'react-query';
import { createNewFolder } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useCreateNewFolder = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewFolder, {
    onSettled: () => queryClient.invalidateQueries([QUERY_KEYS.GET_GROUP_LIST]),
  });
};
