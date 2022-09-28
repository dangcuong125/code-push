import { axiosClient } from '@clvtube/common/lib/request';
import {
  GET_VIDEO_LIST,
  GET_VIDEO_LIST_FEATURE,
} from '@clvtube/common/constants/urlApi.constants';

// 🚀 Get All Videos
export const getAllVideos = async (
  levelKey: string = '',
  topicKeys: string[] = [],
  page: number = 1,
  limit: number = 100,
) => {
  const res = await axiosClient.get(GET_VIDEO_LIST, {
    params: {
      levelKey,
      topicKeys,
      page,
      limit,
    },
  });
  return res;
};

// 🚀 Get Videos Items by Id
export const getVideoITem = async (id: number) => {
  const res = await axiosClient.get(GET_VIDEO_LIST + `/${id}`);
  return res;
};

// 🚀 Get Videos Feature
export const getVideoFeature = async () => {
  const res = await axiosClient.get(GET_VIDEO_LIST_FEATURE);
  return res;
};
