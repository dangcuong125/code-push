import { execute } from '@clvtube/common/lib/request';
import { GET_ALL_LEVELS } from '@clvtube/common/constants/urlApi.constants';

// 🚀 Get All Levels
export const getAllLevels = async (lang: string, page: number) => {
  const res = await execute.get(GET_ALL_LEVELS, {
    params: {
      lang,
      page,
    },
  });
  return res;
};
