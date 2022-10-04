import { USER_SAVE_MEDIA } from '@clvtube/common/constants/urlApi.constants';
import { axiosClient } from '@clvtube/common/lib/request';
import { IGetListUserSavePodcast } from './interfaces';

export const getListUserSavePodcast = (data: IGetListUserSavePodcast) => {
  return axiosClient.get(USER_SAVE_MEDIA, { params: data });
};
