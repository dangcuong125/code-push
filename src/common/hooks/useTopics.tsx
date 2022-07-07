import { useMutation, useQuery } from 'react-query';
import { TopicAPI } from '../api/TopicAPI';
import { QUERY_KEYS } from '../constants/querykeys.constants';


export const useGetAllTopics = (lang = 'en', page = 1) => {
  return useQuery([QUERY_KEYS.GET_ALL_TOPICS, lang, page], () =>
    TopicAPI.getAllTopics(lang, page),
  );
};

export const usePostChooseLevelTopic = () => {
  return useMutation(QUERY_KEYS.POST_LEVEL_TOPIC, TopicAPI.postSelectLevelTopic);
};
