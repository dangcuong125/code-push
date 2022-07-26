import { GET_INFO_USER } from '@clvtube/common/constants/urlApi.constants';
import { execute } from '@clvtube/common/lib/request';
import { POST_INFO_USER } from '../../common/constants/urlApi.constants';

export const getInfoUser = async () => {
  const res = await execute.get(GET_INFO_USER);
  return res;
};

export const postInfoUser = async (data: any) => {
  const res = await execute.patch(POST_INFO_USER, { ...data });
  return res;
};
