import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { axiosClient } from '@clvtube/common/lib/request';
import { GET_ALL_TOPICS } from '../constants/urlApi.constants';

export const useGetAllTopics = (lang: string, page: number, limit: number) => {
  return useQuery([QUERY_KEYS.ALL_TOPICS, lang, page, limit], () =>
    getAllTopics(lang, page, limit),
  );
};
export const getAllTopics = (lang: string, page: number, limit: number) => {
  return axiosClient.get(GET_ALL_TOPICS, {
    params: {
      lang,
      page,
      limit,
    },
  });
};
