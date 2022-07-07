import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  videoTopics: [],
};
export const videoList = createSlice({
  name: 'video-list',
  initialState,
  reducers: {
    receiveTopicsVideo: (state: IInitialState, action: any) => {
      state.videoTopics = action.payload;
    },
    selectOnlyOneTypeVideo: (state: IInitialState, action: any) => {
      state.videoTopics = state.videoTopics.map(item => {
        const isSelected = item.key === action.payload;
        item.isSelected = !isSelected;
        item.bgColor = isSelected ? '#3D9BE0' : '#FFFFFF';
        item.color = isSelected ? '#FFFFFF' : '#3D9BE0';
        return item;
      });
    },
  },
});
export const {
  actions: { receiveTopicsVideo, selectOnlyOneTypeVideo },
  reducer,
} = videoList;
