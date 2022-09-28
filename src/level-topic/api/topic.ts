import { axiosClient } from '@clvtube/common/lib/request';
import {
  GET_ALL_TOPICS,
  POST_LEVEL_TOPIC,
} from '@clvtube/common/constants/urlApi.constants';

// 🚀 Get All Topics
export const getAllTopics = async (lang: string, page: number) => {
  const res = await axiosClient.get(GET_ALL_TOPICS, {
    params: {
      lang,
      page,
    },
  });
  return res;
};

// 🚀 Post Choose Level Topic
export const postSelectLevelTopic = async (data: any) => {
  const res = await axiosClient.post(POST_LEVEL_TOPIC, { ...data });
  return res;
};
