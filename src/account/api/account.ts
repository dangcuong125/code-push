import { GET_INFO_USER } from '@clvtube/common/constants/urlApi.constants';
import { axiosClient } from '@clvtube/common/lib/request';
import { POST_INFO_USER } from '../../common/constants/urlApi.constants';

export const getInfoUser = async () => {
  const res = await axiosClient.get(GET_INFO_USER);
  return res;
};

export const postInfoUser = async (data: any) => {
  const res = await axiosClient.patch(POST_INFO_USER, { ...data });
  return res;
};
