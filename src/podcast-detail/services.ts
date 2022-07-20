import { GET_AUDIO_DETAIL } from '@clvtube/common/constants/urlApi.constants';
import { execute } from '@clvtube/common/lib/request';

export const getAudioDetail = (id: number) => {
  return execute.get(GET_AUDIO_DETAIL + id);
};
