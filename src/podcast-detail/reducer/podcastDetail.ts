import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  duration: 0,
  position: 0,
  startTime: '',
};

export const podcastDetailSlice = createSlice({
  name: 'podcast-detail',
  initialState,
  reducers: {
    getDurations: (state, action) => {
      state.duration = action.payload;
    },
    getPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});
export const {
  actions: { getDurations, getPosition },
  reducer,
} = podcastDetailSlice;
