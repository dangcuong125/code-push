import { RootState } from '@clvtube/common/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IAudioHighlightWordInPodcastDetail,
  IInitialState,
  ITranscriptContent,
} from '../interface';

const initialState: IInitialState = {
  duration: 0,
  position: 0,
  heightOfParagraph: 0,
  paragraphInfo: [],
  sliderValue: 0,
  defaultValue: 50,
  goBack: false,
  isLoading: false,
  isSaveAudio: 0,
  audioHighLightWords: [],
  wordDefinition: {},
};

export const podcastDetailSlice = createSlice({
  name: 'podcast-detail',
  initialState,
  reducers: {
    getDurations: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    getAudioHighlightWords: (
      state,
      action: PayloadAction<IAudioHighlightWordInPodcastDetail[]>,
    ) => {
      state.audioHighLightWords = action.payload;
    },
    getPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },
    getHeightOfParagraph: (state, action: PayloadAction<number>) => {
      state.heightOfParagraph = action.payload;
    },
    // getPositionAndStartTime: (state, action) => {
    //   state.paragraphInfo.push({
    //     offset: action.payload.offset,
    //     startTime: action.payload.startTime,
    //   });
    // },
    setWordIsHighlighted: (
      state,
      action: PayloadAction<ITranscriptContent[]>,
    ) => {
      action.payload?.forEach((item: ITranscriptContent) => {
        item.isHighlighted = state.audioHighLightWords.some(
          highlightWord => highlightWord?.evDict?.word === item?.content,
        );
      });
    },
    getSliderValue: (state, action: PayloadAction<number>) => {
      state.sliderValue = action.payload;
    },
    getDefaultValueSlider: (state, action: PayloadAction<number>) => {
      state.defaultValue = action.payload;
    },
    userIsGoingBack: state => {
      state.goBack = !state.goBack;
    },
    findWordIsClickedForDisplayDefinition: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.wordDefinition = state.audioHighLightWords.find(
        item => item?.evDict?.word === action.payload,
      );
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
    // getPositionAndStartTime,
    getSliderValue,
    getDefaultValueSlider,
    userIsGoingBack,
    setIsSaveAudio,
    getAudioHighlightWords,
    setWordIsHighlighted,
    findWordIsClickedForDisplayDefinition,
  },
  reducer,
} = podcastDetailSlice;
