import { useQuery } from 'react-query'
import { getAllTopics } from '../services'
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants'

export const useGetAllTopics = (
  lang: string,
  enabled: number,
  page: number,
  limit: number,
) => {
  return useQuery([QUERY_KEYS.ALL_TOPICS, lang, enabled, page, limit], () =>
    getAllTopics(lang, enabled, page, limit),
  )
}
