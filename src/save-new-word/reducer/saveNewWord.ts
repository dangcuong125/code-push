import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  wordNeedToBeSaved: '',
  savedWordList: [],
  valueSelectFolder: '',
  errorMessage: '',
};

export const saveNewWord = createSlice({
  name: 'save-new-word',
  initialState,
  reducers: {
    getContentOfWord: (state, action) => {
      state.wordNeedToBeSaved = action.payload;
    },
    getSavedWordList: (state, action) => {
      state.savedWordList = action.payload;
    },
    getValueSelectFolder: (state, action) => {
      state.valueSelectFolder = action.payload;
    },
    getErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const {
  actions: {
    getContentOfWord,
    getSavedWordList,
    getValueSelectFolder,
    getErrorMessage,
  },
  reducer,
} = saveNewWord;
