import { axiosClient } from '@clvtube/common/lib/request';
import {
  CREATE_NEW_FOLDER_FOR_SAVING_WORD,
  DELETE_SAVED_WORD,
  GET_SAVED_WORD_DETAIL,
  GET_SAVED_WORD_LIST,
  GET_WORD_GROUP_LIST,
  SAVE_NEW_WORD,
} from '@clvtube/common/constants/urlApi.constants';
import { INewFolder, INewWord, IWordListId } from './interface';

export const getWordGroupList = (page: number, limit: number) => {
  return axiosClient.get(GET_WORD_GROUP_LIST, {
    params: {
      page,
      limit,
    },
  });
};
export const getSavedWordGroupList = (
  groupId: undefined | string,
  page: number,
  limit: number,
) => {
  return axiosClient.get(GET_SAVED_WORD_LIST, {
    params: {
      groupId,
      page,
      limit,
    },
  });
};
export const getSavedWordDetail = (word: string) => {
  return axiosClient.get(GET_SAVED_WORD_DETAIL, {
    params: {
      word,
    },
  });
};
export const saveNewWord = (newWord: INewWord) => {
  return axiosClient.post(SAVE_NEW_WORD, newWord);
};
export const createNewFolder = (newFolder: INewFolder) => {
  return axiosClient.post(CREATE_NEW_FOLDER_FOR_SAVING_WORD, newFolder);
};
export const deleteSavedWord = (wordListId: IWordListId) => {
  return axiosClient.delete(DELETE_SAVED_WORD, { data: wordListId });
};
