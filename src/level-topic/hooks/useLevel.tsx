import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getAllLevels } from '../api/level';

export const useGetAllLevels = (lang = 'en', page = 1) => {
  return useQuery([QUERY_KEYS.GET_ALL_LEVELS, lang, page], () =>
    getAllLevels(lang, page),
  );
};
