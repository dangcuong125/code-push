import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState, ISavedWordItem } from '../interface';

const initialState: IInitialState = {
  wordNeedToBeSaved: '',
  savedWordList: [],
  valueSelectFolder: '',
  errorMessage: '',
  isOpenSuccessfullModal: false,
};

export const saveNewWord = createSlice({
  name: 'save-new-word',
  initialState,
  reducers: {
    getContentOfWord: (state, action: PayloadAction<string>) => {
      state.wordNeedToBeSaved = action.payload;
    },
    getSavedWordList: (state, action: PayloadAction<ISavedWordItem[]>) => {
      state.savedWordList = action.payload;
    },
    getValueSelectFolder: (state, action: PayloadAction<string>) => {
      state.valueSelectFolder = action.payload;
    },
    resetErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    showSuccessfulModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenSuccessfullModal = action.payload;
    },
  },
});
export const {
  actions: {
    getContentOfWord,
    getSavedWordList,
    getValueSelectFolder,
    resetErrorMessage,
    showSuccessfulModal,
  },
  reducer,
} = saveNewWord;
