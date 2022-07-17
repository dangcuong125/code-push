import { useQuery } from 'react-query';
import { execute } from '../lib/request/index';
import { GET_POPULAR_TOPICS } from '../constants/urlApi';
import { QUERY_KEYS } from '../constants/querykeys.constants';

export const useGetPopularTopics = (
  lang: string,
  page: number,
  limit: number,
) => {
  return useQuery([QUERY_KEYS.GET_POPULAR_TOPICS, lang, page, limit], () =>
    getPopularTopics(lang, page, limit),
  );
};

const getPopularTopics = (lang: string, page: number, limit: number) => {
  return execute.get(GET_POPULAR_TOPICS, {
    params: {
      lang,
      page,
      limit,
    },
  });
};
