import { useQuery } from 'react-query'
import { getPodcastList } from '../services'
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants'

export const useGetPodcastList = (page: number, limit: number) => {
  return useQuery(QUERY_KEYS.PODCAST_LIST, () => getPodcastList(page, limit))
}
