import { createSlice } from '@reduxjs/toolkit';
import { IUserAccount } from '../interfaces/index';

const initialState: IUserAccount = {
  phone: '',
  email: '',
  fullname: '',
  firIdToken: '',
  isTypeAuthPhone: false,
  tokenApp: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccountWithAuth: (state: IUserAccount, action: any) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.fullname = action.payload.fullname;
      state.firIdToken = action.payload.firIdToken;
      state.isTypeAuthPhone = action.payload.isTypeAuthPhone;
    },
    getTokenApp: (state, action) => {
      state.tokenApp = action.payload;
    },
  },
});

export const {
  actions: { updateAccountWithAuth, getTokenApp },
  reducer,
} = authSlice;
