import { axiosClient } from '@clvtube/common/lib/request';
import {
  ADMIN_DICTIONARY,
  CREATE_NEW_FOLDER_FOR_SAVING_WORD,
  USER_SAVES_WORD,
} from '@clvtube/common/constants/urlApi.constants';
import { INewFolder, INewWord, IWordListId } from './interface';

export const getWordGroupList = (page: number, limit: number) => {
  return axiosClient.get(CREATE_NEW_FOLDER_FOR_SAVING_WORD, {
    params: {
      page,
      limit,
    },
  });
};
export const getSavedWordGroupList = (
  groupId: null | number,
  page: number,
  limit: number,
  search: string,
) => {
  console.log({ search });
  return axiosClient.get(USER_SAVES_WORD, {
    params: {
      groupId,
      page,
      limit,
      search,
    },
  });
};
export const getSavedWordDetail = (word: string) => {
  return axiosClient.get(ADMIN_DICTIONARY, {
    params: {
      word,
    },
  });
};
export const saveNewWord = (newWord: INewWord) => {
  return axiosClient.post(USER_SAVES_WORD, newWord);
};
export const createNewFolderForSavingWord = (newFolder: INewFolder) => {
  return axiosClient.post(CREATE_NEW_FOLDER_FOR_SAVING_WORD, newFolder);
};
export const deleteSavedWord = (wordListId: IWordListId) => {
  return axiosClient.delete(USER_SAVES_WORD, { data: wordListId });
};
