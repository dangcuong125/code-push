import { useQuery } from 'react-query';
import { getSavedWordGroupList } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetSavedWordList = (
  groupId: null | number,
  search: string,
  page: number = 1,
  limit: number = 10,
) => {
  return useQuery(
    [QUERY_KEYS.GET_SAVED_WORD_LIST, groupId, search, page, limit],
    () => getSavedWordGroupList(groupId, page, limit, search),
  );
};
