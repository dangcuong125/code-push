import { RootState } from '@clvtube/common/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interface';

const initialState: IInitialState = {
  wordNeedToBeSaved: '',
  savedWordList: [],
  valueSelectFolder: '',
  errorMessageForSelectFolder: '',
  isOpenSuccessfullModal: false,
  groupId: 0,
  isOpenCreateFolderModal: false,
  valueNameNewFolder: '',
  errorMsgForCreateFolder: '',
  searchWord: '',
};

export const saveNewWord = createSlice({
  name: 'save-new-word',
  initialState,
  reducers: {
    getContentOfWord: (state, action: PayloadAction<string>) => {
      state.wordNeedToBeSaved = action.payload;
    },
    // getSavedWordList: (state, action: PayloadAction<ISavedWordItem[]>) => {
    //   state.savedWordList = action.payload;
    //   console.log('hello', state.savedWordList);
    // },
    getValueSelectFolder: (state, action: PayloadAction<string>) => {
      state.valueSelectFolder = action.payload;
    },
    resetErrorMessageForSelectFolder: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.errorMessageForSelectFolder = action.payload;
    },
    showSuccessfulModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenSuccessfullModal = action.payload;
    },
    getGroupId: (state, action: PayloadAction<number>) => {
      state.groupId = action.payload;
    },
    showCreateFolderModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenCreateFolderModal = action.payload;
    },
    setValueNameNewFolder: (state, action: PayloadAction<string>) => {
      state.valueNameNewFolder = action.payload;
    },
    resetErrorMsgForCreateFolder: (state, action: PayloadAction<string>) => {
      state.errorMsgForCreateFolder = action.payload;
    },
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
    resetValueSelectFolder: state => {
      state.valueSelectFolder = '';
    },
  },
});

export const getSearchWord = (state: RootState) =>
  state.saveNewWordReducer.searchWord;
export const {
  actions: {
    getContentOfWord,
    getValueSelectFolder,
    resetErrorMessageForSelectFolder,
    showSuccessfulModal,
    getGroupId,
    showCreateFolderModal,
    setValueNameNewFolder,
    resetErrorMsgForCreateFolder,
    resetValueSelectFolder,
    setSearchWord,
  },
  reducer,
} = saveNewWord;
