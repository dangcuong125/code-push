import { useQuery } from 'react-query';
import { VideoAPI } from '../api/VideoAPI';
import { QUERY_KEYS } from '../constants/querykeys.constants';

export const useGetAllVideos = (
  levelKey: string = '',
  topicKeys: string[] = [],
  page: number = 1,
  limit: number = 100,
) => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_VIDEOS, levelKey, topicKeys, page, limit],
    () => VideoAPI.getAllVideos(levelKey, topicKeys, page, limit),
  );
};

export const useGetVideoItem = (id: number) => {
  return useQuery([QUERY_KEYS.GET_VIDEO_ITEM, id], () =>
    VideoAPI.getVideoITem(id),
  );
};
