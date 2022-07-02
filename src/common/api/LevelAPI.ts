import { execute } from '@clvtube/common/lib/request';
import { GET_ALL_LEVELS } from '../constants/urlApi';

export const LevelAPI = {
  // 🚀 Get All Topics
  getAllLevels: async (lang: string, page: number) => {
    const res = await execute.get(GET_ALL_LEVELS, {
      params: {
        lang,
        page,
      },
    });
    return res;
  },
};
