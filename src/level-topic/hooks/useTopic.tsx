import { useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getAllTopics, postSelectLevelTopic } from '../api/topic';

export const useGetAllTopics = (lang = 'en', page = 1) => {
  return useQuery([QUERY_KEYS.GET_ALL_TOPICS, lang, page], () =>
    getAllTopics(lang, page),
  );
};

export const usePostChooseLevelTopic = () => {
  return useMutation(QUERY_KEYS.POST_LEVEL_TOPIC, postSelectLevelTopic);
};
