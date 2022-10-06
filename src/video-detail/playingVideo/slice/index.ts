import { RootState } from '@clvtube/common/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState, IVideoHighlightWord } from '../interface';

const initialState: IInitialState = {
  videoItem: {},
  videoItemIsConverted: [],
  isSaveVideo: 0,
  startTime: 0,
  position: 0,
  duration: 0,
  wordIsClicked: '',
  videoHighlightWords: [],
  wordDefinition: null,
};

const videoItemSlice = createSlice({
  name: 'videoItem',
  initialState,
  reducers: {
    updateVideoItem: (state, action) => {
      state.videoItem = action.payload;
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
    customVideoItemConverted: (state, action: PayloadAction<string[]>) => {
      state.videoItemIsConverted = action.payload?.map((item: string) => {
        const isHighlighted = state.videoHighlightWords.some(
          (highlightWord: IVideoHighlightWord) =>
            item === highlightWord?.evDict?.word,
        );
        return {
          content: item,
          isHighlighted,
        };
      });
    },
    getWordIsClicked: (state, action: PayloadAction<string>) => {
      state.wordIsClicked = action.payload;
    },
    getVideoHighlightWord: (
      state,
      action: PayloadAction<IVideoHighlightWord[]>,
    ) => {
      state.videoHighlightWords = action.payload;
    },
    findWordIsClickedForDisplayDefinition: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.wordDefinition = state.videoHighlightWords.find(
        item => item?.evDict?.word === action.payload,
      );
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
    setIsSaveVideo,
    setStartTime,
    setDuration,
    setPosition,
    getWordIsClicked,
    customVideoItemConverted,
    getVideoHighlightWord,
    findWordIsClickedForDisplayDefinition,
  },
  reducer,
} = videoItemSlice;
