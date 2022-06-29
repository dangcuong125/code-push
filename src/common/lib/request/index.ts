import axios from 'axios'
import { toQueryString } from '../common.lib'
import { BASE_URL } from '@clvtube/common/constants/urlApi'

const execute = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'Application/json',
  },
  paramsSerializer: param => toQueryString(param),
  baseURL: BASE_URL,
})

export { execute }
