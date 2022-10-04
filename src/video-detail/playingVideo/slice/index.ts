import { RootState } from '@clvtube/common/redux/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoItem: {},
  videoTranscripts: [
    // { startTime: 123, content: 'Taodzo is developer' },
    // { startTime: 456, content: 'binh dinh mai dinh' },
    // { startTime: 789, content: 'the end...' },
  ],
  isSaveVideo: 0,
  startTime: 0,
  position: 0,
  duration: 0,
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
    setIsSaveVideo: (state, action: { payload: number }) => {
      state.isSaveVideo = action.payload;
    },
    setStartTime: (state, action: { payload: number }) => {
      state.startTime = action.payload;
    },
    setDuration: (state, action: { payload: number }) => {
      state.duration = action.payload;
    },
    setPosition: (state, action: { payload: number }) => {
      state.position = action.payload;
    },
  },
});

export const getIsSaveVideo = (state: RootState) =>
  state.videoItemReducer.isSaveVideo;

export const getStartTime = (state: RootState) =>
  state.videoItemReducer.startTime;

export const getDuration = (state: RootState) =>
  state.videoItemReducer.duration;
export const getPosition = (state: RootState) =>
  state.videoItemReducer.position;

export const {
  actions: {
    updateVideoItem,
    updateVideoTranscripts,
    setIsSaveVideo,
    setStartTime,
    setDuration,
    setPosition,
  },
  reducer,
} = videoItemSlice;
