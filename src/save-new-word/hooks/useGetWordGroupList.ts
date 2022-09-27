import { useQuery } from 'react-query';
import { getWordGroupList } from '../services';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetWordGroupList = (page: number = 1, limit: number = 10) => {
  return useQuery([QUERY_KEYS.GET_GROUP_LIST, page, limit], () =>
    getWordGroupList(page, limit),
  );
};
