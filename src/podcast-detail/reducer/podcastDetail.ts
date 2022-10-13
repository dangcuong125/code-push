import { RootState } from '@clvtube/common/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IAudioHighlightWordInPodcastDetail,
  IInitialState,
  ITranscriptContent,
  ITranscriptItem,
} from '../interface';
import {
  MediaType,
  PUNCTUATION_TYPE_OF_AUDIO,
  USER_PROCESS_TOTAL,
} from '@clvtube/common/constants/common.constants';
import * as lodash from 'lodash';

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
  wordDefinition: null,
  audioTranscripts: [],
  infoAudio: [],
  isInrangeOfStartTimeAndEndTime: 0,
  endTimeOfParagraph: '',
  customAudioTranscripts: {},
  podcastSaveInfo: {},
  audioId: null,
  allTranscriptIds: [],

  normalizedParagraph: {},
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
    getAudioTranscripts: (state, action: PayloadAction<ITranscriptItem[]>) => {
      state.audioTranscripts = action.payload;
    },
    initializeCustomAudioTranscripts: state => {
      const customAudioInfo: any = {};
      const allAudioIds: string[] = [];
      state.audioTranscripts?.forEach(item => {
        item.endTime = item.content[item.content.length - 2]?.start_time;
        item?.content.forEach((word, index, array) => {
          if (array[index + 1]?.type === PUNCTUATION_TYPE_OF_AUDIO) {
            word.content += array[index + 1]?.content;
            delete array[index + 1]?.content;
          }
        });
        allAudioIds.push(`${item.id}`);
        customAudioInfo[`${item.id}`] = item;
      });

      state.customAudioTranscripts.allIds = allAudioIds;
      state.customAudioTranscripts.infoAudio = customAudioInfo;
    },
    colorizeTextWhenAudioRunning: state => {
      const idOfCurrentParagraph = lodash.findKey(
        state.customAudioTranscripts.infoAudio,
        item => {
          return (
            item?.startTime < state.position && state.position < item?.endTime
          );
        },
      );

      const currentParagraph =
        !lodash.isEmpty(state?.customAudioTranscripts) &&
        state?.customAudioTranscripts?.infoAudio[idOfCurrentParagraph || 0];

      if (!lodash.isEmpty(currentParagraph)) {
        const resetBgParagraph = currentParagraph.endTime === state.position;
        currentParagraph.bgParagraph = !resetBgParagraph
          ? '#3D9BE0'
          : '#FFFFFF';
      }
      state?.customAudioTranscripts?.allIds?.forEach(id => {
        state.customAudioTranscripts.infoAudio[id]?.content?.forEach(item => {
          item.isDisplayColorizeText =
            item?.start_time < state.position + 0.17 &&
            item?.start_time > state.position - 0.17;
        });
      });
    },
    getAudioId: (state, action: PayloadAction<number>) => {
      state.audioId = action.payload;
    },
    saveNewAudio: state => {
      state.podcastSaveInfo = {
        audioId: state.audioId,
        mediaType: MediaType.AUDIO,
        startTime: (state.position / state.duration) * USER_PROCESS_TOTAL,
      };
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
    getAudioTranscripts,
    initializeCustomAudioTranscripts,
    saveNewAudio,
    getAudioId,
    colorizeTextWhenAudioRunning,
  },
  reducer,
} = podcastDetailSlice;
