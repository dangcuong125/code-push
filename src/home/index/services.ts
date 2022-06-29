import {
  GET_ALL_TOPICS,
  GET_PODCAST_LIST,
} from '@clvtube/common/constants/urlApi'
import { execute } from '@clvtube/common/lib/request'

export const getPodcastList = (
  topicKey: string,
  page: number,
  limit: number,
) => {
  return execute.get(GET_PODCAST_LIST, {
    params: {
      topicKey,
      page,
      limit,
    },
  })
}
export const getAllTopics = (
  lang: string,
  enabled: number,
  page: number,
  limit: number,
) => {
  return execute.get(GET_ALL_TOPICS, {
    params: {
      lang,
      enabled,
      page,
      limit,
    },
  })
}
