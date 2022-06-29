import { useQuery } from 'react-query'
import { getPodcastList } from '../services'
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants'

export const useGetPodcastList = (
  topicKey: string,
  page: number,
  limit: number,
) => {
  return useQuery([QUERY_KEYS.PODCAST_LIST, topicKey, page, limit], () =>
    getPodcastList(topicKey, page, limit),
  )
}
