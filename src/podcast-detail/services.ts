import {
  GET_AUDIO_DETAIL,
  USER_SAVE_MEDIA,
} from '@clvtube/common/constants/urlApi.constants';
import { IUserSaveMedia } from '@clvtube/common/interfaces/common.interface';
import { axiosClient } from '@clvtube/common/lib/request';

export const getAudioDetail = (id: number) => {
  return axiosClient.get(GET_AUDIO_DETAIL + id);
};

export const postUserSaveAudio = (data: IUserSaveMedia) => {
  return axiosClient.post(USER_SAVE_MEDIA, data);
};

export const deletePodcast = (ids: number[]) => {
  return axiosClient.delete(USER_SAVE_MEDIA, { data: { ids } });
};
