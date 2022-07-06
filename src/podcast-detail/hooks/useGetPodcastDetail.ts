import { getAudioDetail } from '../services';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';

export const useGetPodcastDetail = (id: number) => {
  return useQuery([QUERY_KEYS.PODCAST_DETAIL, id], () => getAudioDetail(id));
};
