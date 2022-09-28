import { execute } from '@clvtube/common/lib/request';
import {
  DELETE_SEARCH_HISTORY,
  GET_SEARCH_HISTORY,
  GET_SEARCH_RESULT,
} from '@clvtube/common/constants/urlApi.constants';

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
export const getSearchHistory = (size: number) => {
  return execute.get(GET_SEARCH_HISTORY, {
    params: {
      size,
    },
  });
};
export const deleteSearchHistoryItem = (id: number) => {
  return execute.delete(DELETE_SEARCH_HISTORY + `/${id}`);
};

export const deleteAllSearchHistoryItem = () => {
  return execute.delete(DELETE_SEARCH_HISTORY);
};
