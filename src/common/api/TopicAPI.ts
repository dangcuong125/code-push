import { execute } from '@clvtube/common/lib/request';
import { GET_ALL_TOPICS, POST_LEVEL_TOPIC } from '../constants/urlApi';

export const TopicAPI = {
  // 🚀 Get All Topics
  getAllTopics: async (lang: string, page: number) => {
    const res = await execute.get(GET_ALL_TOPICS, {
      params: {
        lang,
        page,
      },
    });
    return res;
  },

  // 🚀 Post Choose Level Topic
  postSelectLevelTopic: async (data: any) => {
    const res = await execute.post(POST_LEVEL_TOPIC, { ...data });
    return res;
  },
};
