import { useQuery } from 'react-query';
import { LevelAPI } from '../api/LevelAPI';
import { GET_ALL_LEVELS } from '../constants/urlApi';

export const useGetAllLevels = (lang = 'en', page = 1) => {
  return useQuery([GET_ALL_LEVELS, lang, page], () =>
    LevelAPI.getAllLevels(lang, page),
  );
};
