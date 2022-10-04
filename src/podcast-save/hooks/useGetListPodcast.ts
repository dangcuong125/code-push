import { getListUserSavePodcast } from '../services';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { IGetListUserSavePodcast } from '../interfaces';

export const useGetUserSavePodcastList = (params: IGetListUserSavePodcast) => {
  return useQuery([QUERY_KEYS.GET_SAVED_MEDIA_LIST, params], () =>
    getListUserSavePodcast(params),
  );
};
