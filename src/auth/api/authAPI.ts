import { axiosClient } from '@clvtube/common/lib/request';
import {
  LOGIN_POST,
  REGISTER_POST,
} from '../../common/constants/urlApi.constants';

export const LoginAuthAPI = async (data: any) => {
  const res = await axiosClient.post(LOGIN_POST, { firIdToken: data });
  return res;
};

export const RegisterAuthAPI = async (data: any) => {
  const res = await axiosClient.post(REGISTER_POST, { ...data });
  return res;
};
