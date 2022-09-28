import { axiosClient } from '@clvtube/common/lib/request';
import { GET_VIDEO_LIST } from '../constants/urlApi.constants';

export const VideoAPI = {
  // 🚀 Get All Videos
  getAllVideos: async (
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
  },
  // 🚀 Get Videos Items by Id
  getVideoITem: async (id: number) => {
    const res = await axiosClient.get(GET_VIDEO_LIST + `/${id}`);
    return res;
  },
};
