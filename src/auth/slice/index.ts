import { createSlice } from '@reduxjs/toolkit';
import { IUserAccount } from '../interfaces/index';

const initialState: IUserAccount = {
  phone: '',
  email: '',
  fullname: '',
  firIdToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccountWithAuthGoogle: (state: IUserAccount, action: any) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.fullname = action.payload.name;
      state.firIdToken = action.payload.firIdToken;
    },
  },
});

export const {
  actions: { updateAccountWithAuthGoogle },
  reducer,
} = authSlice;
