import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    updateVideosData: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const {
  actions: { updateVideosData },
  reducer,
} = videoSlice;
