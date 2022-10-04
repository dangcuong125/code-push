import { USER_SAVE_MEDIA } from '@clvtube/common/constants/urlApi.constants';
import { axiosClient } from '@clvtube/common/lib/request';
import { IGetListUserSaveVideo } from './interfaces';

export const getListUserSaveVideo = (data: IGetListUserSaveVideo) => {
  return axiosClient.get(USER_SAVE_MEDIA, { params: data });
};
