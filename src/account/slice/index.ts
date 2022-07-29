import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  avatar: '',
  avatarId: NaN,
  fullname: '',
  phone: '',
  email: '',
  level: '',
};

const accountSlice = createSlice({
  name: 'accountUser',
  initialState,
  reducers: {
    updateAccountUser: (state, action) => {
      state.avatar = action.payload.avatar;
      state.avatarId = action.payload.avatarId;
      state.fullname = action.payload.fullname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.level = action.payload.level;
    },
  },
});

export const {
  actions: { updateAccountUser },
  reducer,
} = accountSlice;
