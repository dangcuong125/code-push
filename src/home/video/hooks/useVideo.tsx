import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { getVideoFeature } from '../api/video';

export const useGetVideoFeature = () => {
  return useQuery(QUERY_KEYS.GET_VIDEOS_FEATURE, () => getVideoFeature());
};
