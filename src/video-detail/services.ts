import { USER_SAVE_MEDIA } from '@clvtube/common/constants/urlApi.constants';
import { IUserSaveMedia } from '@clvtube/common/interfaces/common.interface';
import { axiosClient } from '@clvtube/common/lib/request';

export const postUserSaveVideo = (data: IUserSaveMedia) => {
  return axiosClient.post(USER_SAVE_MEDIA, data);
};

export const deleteSaveVideo = (ids: number[]) => {
  return axiosClient.delete(USER_SAVE_MEDIA, { data: { ids } });
};
