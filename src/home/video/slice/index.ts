import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: [],
  videos: [],
  videosFeature: [],
  topicPicking: 'All',
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    updateTopicsData: (state, action) => {
      state.topics = action.payload?.map(item => {
        return { ...item, isSelected: false };
      });
    },
    selectTopic: (state, action) => {
      state.topics = state.topics.map((item: any) => {
        console.log(action.payload);
        if (item.key === action.payload && !item.isSelected) {
          return {
            ...item,
            isSelected: true,
          };
        }
        if (item.key === action.payload && item.isSelected) {
          return item;
        }
        if (item.isSelected) {
          return {
            ...item,
            isSelected: false,
          };
        }
        return item;
      });
    },
    updateVideosData: (state, action) => {
      state.videos = action.payload;
    },
    updateVideosFeature: (state, action) => {
      state.videosFeature = action.payload;
    },
  },
});

export const {
  actions: {
    updateTopicsData,
    selectTopic,
    updateVideosData,
    updateVideosFeature,
  },
  reducer,
} = videoSlice;
