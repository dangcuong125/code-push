import { RootState } from '@clvtube/common/redux/store';
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
  isLoading: false,
  isSaveAudio: 0,
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
    getLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSaveAudio: (state, action: { payload: number }) => {
      state.isSaveAudio = action.payload;
    },
  },
});

export const getIsSaveAudio = (state: RootState) =>
  state.podcastDetail.isSaveAudio;

export const {
  actions: {
    getDurations,
    getPosition,
    getHeightOfParagraph,
    getPositionAndStartTime,
    getSliderValue,
    getDefaultValueSlider,
    userIsGoingBack,
    getLoadingState,
    setIsSaveAudio,
  },
  reducer,
} = podcastDetailSlice;
