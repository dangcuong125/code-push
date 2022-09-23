import { execute } from '@clvtube/common/lib/request';
import { GET_SEARCH_RESULT } from '@clvtube/common/constants/urlApi.constants';

export const getSearchResult = (
  keyword: string,
  page: number,
  limit: number,
) => {
  return execute.get(GET_SEARCH_RESULT, {
    params: {
      keyword,
      page,
      limit,
    },
  });
};
