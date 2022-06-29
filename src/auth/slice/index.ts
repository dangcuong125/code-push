import { createSlice } from '@reduxjs/toolkit'
import { IUserAccount } from '../interfaces/index'

const initialState: IUserAccount = {
  phone: '',
  email: '',
  name: '',
  address: '',
  firIdToken: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccountWithAuthGoogle: (state, action) => {
      state.phone = action.payload.phone
      state.email = action.payload.email
      state.name = action.payload.name
      state.address = action.payload.address
      state.firIdToken = action.payload.firIdToken
    },
  },
})

export const {
  actions: { updateAccountWithAuthGoogle },
  reducer,
} = authSlice
