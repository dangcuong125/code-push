import { GET_VIDEO_LIST } from '../constants/urlApi.constants';
import { axiosClient } from '../lib/request/index';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../constants/querykeys.constants';

export const useGetVideoList = (
  topicKeys: string,
  page: number,
  limit: number,
) => {
  return useQuery([QUERY_KEYS.VIDEO_LIST, topicKeys, page, limit], () =>
    getVideoList(topicKeys, page, limit),
  );
};

export const getVideoList = (
  topicKeys: string,
  page: number,
  limit: number,
) => {
  return axiosClient.get(GET_VIDEO_LIST, {
    params: {
      topicKeys,
      page,
      limit,
    },
  });
};
