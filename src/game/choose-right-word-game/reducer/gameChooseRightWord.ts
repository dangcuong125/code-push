import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  index: 0,
  amountQuestionAndAnswers: [],
  answerIsChosen: '',
  correctAnswer: '',
  answers: [],
  questionAndAnswers: null,
  correctAnswers: [],
};
export const gameChooseRightWordSlice = createSlice({
  name: 'game-choose-right-word',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.index += action.payload;
    },
    resetIndexOfQuestionAndAnswers: state => {
      state.index = 0;
    },
    getAmountQuestionAndAnswer: (state, action) => {
      state.amountQuestionAndAnswers = action.payload;
    },
    listenAnswerIsChosen: (state, action) => {
      state.answerIsChosen = action.payload;
    },
    getCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    listenClickEvent: state => {
      state.answers = state?.amountQuestionAndAnswers[
        state.index
      ]?.answers?.map(answer => {
        return {
          answerInfo: {
            content: answer,
            isClicked: answer === state.answerIsChosen,
            bgColor: answer === state.correctAnswer ? '#28A745' : '#DC3545',
          },
        };
      });
      state.questionAndAnswers = {
        id: state?.amountQuestionAndAnswers[state.index]?.id,
        question: state?.amountQuestionAndAnswers[state.index]?.word,
        answers: state.answers,
      };
    },
    countCorrectAnswer: (state, action) => {
      state.correctAnswers.push(action.payload);
    },
    resetCorrectAnswers: state => {
      state.correctAnswers = [];
    },
  },
});
export const {
  actions: {
    setIndex,
    listenClickEvent,
    getAmountQuestionAndAnswer,
    listenAnswerIsChosen,
    getCorrectAnswer,
    resetIndexOfQuestionAndAnswers,
    countCorrectAnswer,
    resetCorrectAnswers,
  },
  reducer,
} = gameChooseRightWordSlice;
