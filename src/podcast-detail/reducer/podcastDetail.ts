import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  duration: 0,
  position: 0,
  heightOfParagraph: '',
  paragraphInfo: [],
  sliderValue: 0,
  defaultValue: 50,
  goBack: false,
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
    getHeightOfParagraph: (state, action) => {
      state.heightOfParagraph = action.payload;
    },
    getPositionAndStartTime: (state, action) => {
      state.paragraphInfo.push({
        offset: action.payload.offset,
        startTime: action.payload.startTime,
      });
    },
    getSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
    getDefaultValueSlider: (state, action) => {
      state.defaultValue = action.payload;
    },
    userIsGoingBack: state => {
      state.goBack = !state.goBack;
    },
  },
});
export const {
  actions: {
    getDurations,
    getPosition,
    getHeightOfParagraph,
    getPositionAndStartTime,
    getSliderValue,
    getDefaultValueSlider,
    userIsGoingBack,
  },
  reducer,
} = podcastDetailSlice;
