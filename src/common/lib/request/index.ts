import axios from 'axios';
import { toQueryString } from '../common.lib';
import { BASE_URL } from '@clvtube/common/constants/urlApi.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const execute = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'Application/json',
  },
  paramsSerializer: param => toQueryString(param),
  baseURL: BASE_URL,
});

execute.interceptors.request.use(async config => {
  const tokenValue = await AsyncStorage.getItem('token_App');
  if (tokenValue) {
    config.headers.Authorization = `Bearer ${tokenValue}`;
  }
  return config;
});

export { execute };
