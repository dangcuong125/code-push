import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, IVideoTypeCarousel } from '../interfaces';
import { VIDEO_LIST } from '@clvtube/mocks/homePage';

const initialState: IInitialState = {
  videoTypeCarousel: [],
  videoList: VIDEO_LIST,
  podcastTypeCarousel: [],
};
export const homePage = createSlice({
  name: 'home-page',
  initialState,
  reducers: {
    receiveTopicsVideo: (state: IInitialState, action: any) => {
      state.videoTypeCarousel = action.payload;
    },
    receiveTopicsPodcast: (state: IInitialState, action: any) => {
      state.podcastTypeCarousel = action.payload;
    },
    selectOnlyOneTypeVideo: (state: IInitialState, action: any) => {
      state.videoTypeCarousel = state?.videoTypeCarousel?.map(
        (item: IVideoTypeCarousel) => {
          const isSelected = item.key === action.payload;
          item.isSelected = !isSelected;
          item.bgColor = isSelected ? '#3D9BE0' : '#FFFFFF';
          item.color = isSelected ? '#FFFFFF' : '#3D9BE0';
          return item;
        },
      );
    },
    selectOnlyOneTypePodcast: (state: IInitialState, action: any) => {
      state.podcastTypeCarousel = state?.podcastTypeCarousel?.map(
        (item: IVideoTypeCarousel) => {
          const isSelected = item.key === action.payload;
          item.isSelected = !isSelected;
          item.bgColor = isSelected ? '#3D9BE0' : '#FFFFFF';
          item.color = isSelected ? '#FFFFFF' : '#3D9BE0';
          return item;
        },
      );
    },
  },
});
export const {
  actions: {
    selectOnlyOneTypeVideo,
    receiveTopicsVideo,
    receiveTopicsPodcast,
    selectOnlyOneTypePodcast,
  },
  reducer,
} = homePage;
