import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  indexOfQuestion: 0,
  isFinishChecking: false,
  idToastCorrect: null,
  idToastInCorrect: null,
  correctAnswers: [],
  bgColorOfButtonNext: '',
  //   prevRouteName: '',
};
export const gameDragWordSlice = createSlice({
  name: 'game-drag-word',
  initialState,
  reducers: {
    setIndexOfQuestion: (state, action: PayloadAction<number>) => {
      state.indexOfQuestion += action.payload;
    },
    resetIndexOfQuestionDragWordGame: state => {
      state.indexOfQuestion = 0;
    },
    finishCheckingAnswer: (state, action: PayloadAction<boolean>) => {
      state.isFinishChecking = action.payload;
    },
    getIdToastCorrect: (state, action: PayloadAction<number>) => {
      state.idToastCorrect = action.payload;
    },
    getIdToastInCorrect: (state, action: PayloadAction<number>) => {
      state.idToastInCorrect = action.payload;
    },
    countCorrectAnswers: (state, action: PayloadAction<boolean>) => {
      state.correctAnswers.push(action.payload);
    },
    resetCorrectAnswers: state => {
      state.correctAnswers = [];
    },
    setBgColorForButtonNext: (state, action: PayloadAction<string>) => {
      state.bgColorOfButtonNext = action.payload;
    },
  },
});
export const {
  actions: {
    setIndexOfQuestion,
    resetIndexOfQuestionDragWordGame,
    finishCheckingAnswer,
    getIdToastCorrect,
    getIdToastInCorrect,
    countCorrectAnswers,
    setBgColorForButtonNext,
    resetCorrectAnswers,
  },
  reducer,
} = gameDragWordSlice;
