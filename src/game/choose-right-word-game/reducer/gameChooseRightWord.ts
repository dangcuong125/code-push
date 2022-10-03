import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  index: 0,
  isLoading: false,
  amountQuestionAndAnswers: [],
};
export const gameChooseRightWordSlice = createSlice({
  name: 'game-choose-right-word',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.index += action.payload;
    },
    getLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getAmountQuestionAndAnswer: (state, action) => {
      state.amountQuestionAndAnswers = action.payload;
    },
  },
});
export const {
  actions: { setIndex, getLoadingState, getAmountQuestionAndAnswer },
  reducer,
} = gameChooseRightWordSlice;
