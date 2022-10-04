import { getListUserSaveVideo } from '../services';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { IGetListUserSaveVideo } from '../interfaces';

export const useGetUserSaveVideoList = (params: IGetListUserSaveVideo) => {
  return useQuery([QUERY_KEYS.GET_SAVED_MEDIA_LIST, params], () =>
    getListUserSaveVideo(params),
  );
};
