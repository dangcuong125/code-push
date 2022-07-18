import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoItem: {},
  videoTranscripts: [
    // { startTime: 123, content: 'Taodzo is developer' },
    // { startTime: 456, content: 'binh dinh mai dinh' },
    // { startTime: 789, content: 'the end...' },
  ],
};

const videoItemSlice = createSlice({
  name: 'videoItem',
  initialState,
  reducers: {
    updateVideoItem: (state, action) => {
      state.videoItem = action.payload;
    },
    updateVideoTranscripts: (state, action) => {
      state.videoTranscripts = action.payload;
    },
  },
});

export const {
  actions: { updateVideoItem, updateVideoTranscripts },
  reducer,
} = videoItemSlice;
