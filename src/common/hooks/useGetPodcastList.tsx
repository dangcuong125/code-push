import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { axiosClient } from '@clvtube/common/lib/request';
import { GET_PODCAST_LIST } from '../constants/urlApi.constants';

export const useGetPodcastList = (
  topicKey: string,
  page: number,
  limit: number,
) => {
  return useQuery([QUERY_KEYS.PODCAST_LIST, topicKey, page, limit], () =>
    getPodcastList(topicKey, page, limit),
  );
};
export const getPodcastList = (
  topicKey: string,
  page: number,
  limit: number,
) => {
  return axiosClient.get(GET_PODCAST_LIST, {
    params: {
      topicKey,
      page,
      limit,
    },
  });
};
