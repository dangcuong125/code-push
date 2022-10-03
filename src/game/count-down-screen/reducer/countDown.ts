import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  count: 3,
  isRenderGame: false,
};

export const countDownSlice = createSlice({
  name: 'count-down',
  initialState,
  reducers: {
    resetCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const {
  actions: { resetCount },
  reducer,
} = countDownSlice;
