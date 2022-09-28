import { GET_AUDIO_DETAIL } from '@clvtube/common/constants/urlApi.constants';
import { axiosClient } from '@clvtube/common/lib/request';

export const getAudioDetail = (id: number) => {
  return axiosClient.get(GET_AUDIO_DETAIL + id);
};
