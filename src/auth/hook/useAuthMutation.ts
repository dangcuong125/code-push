import { useMutation } from 'react-query'
import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants'
import { LoginAuthAPI, RegisterAuthAPI } from '../api/authAPI'

export const useLoginMutation = () => {
  return useMutation(QUERY_KEYS.LOGIN, LoginAuthAPI)
}

export const useRegisterMutation = () => {
  return useMutation(QUERY_KEYS.REGISTER, RegisterAuthAPI)
}
