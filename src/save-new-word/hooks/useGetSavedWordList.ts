import { useQuery } from 'react-query';
import { getSavedWordGroupList } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetSavedWordList = (
  groupId: string,
  page: number = 1,
  limit: number = 10,
) => {
  return useQuery([QUERY_KEYS.GET_SAVED_WORD_LIST], () =>
    getSavedWordGroupList(groupId, page, limit),
  );
};
