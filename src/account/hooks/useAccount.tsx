import { useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getInfoUser, postInfoUser } from '../api/account';

export const useGetInfoUser = () => {
  return useQuery(QUERY_KEYS.GET_INFO_USER, () => getInfoUser());
};

export const usePostInfoUser = () => {
  return useMutation(QUERY_KEYS.POST_INFO_USER, postInfoUser);
};
