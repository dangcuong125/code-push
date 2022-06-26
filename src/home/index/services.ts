import { GET_PODCAST_LIST } from '@clvtube/common/constants/urlApi'
import { execute } from '@clvtube/common/lib/request'

export const getPodcastList = (page: number, limit: number) => {
  return execute.get(GET_PODCAST_LIST, {
    params: {
      page,
      limit,
    },
  })
}
