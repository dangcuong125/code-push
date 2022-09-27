import { execute } from '@clvtube/common/lib/request';
import {
  GET_SAVED_WORD_DETAIL,
  GET_SAVED_WORD_LIST,
  GET_WORD_GROUP_LIST,
  SAVE_NEW_WORD,
} from '@clvtube/common/constants/urlApi.constants';
import { INewWord } from './interface';

export const getWordGroupList = (page: number, limit: number) => {
  return execute.get(GET_WORD_GROUP_LIST, {
    params: {
      page,
      limit,
    },
  });
};
export const getSavedWordGroupList = (
  groupId: string,
  page: number,
  limit: number,
) => {
  return execute.get(GET_SAVED_WORD_LIST, {
    params: {
      groupId,
      page,
      limit,
    },
  });
};
export const getSavedWordDetail = (word: string) => {
  return execute.get(GET_SAVED_WORD_DETAIL, {
    params: {
      word,
    },
  });
};
export const saveNewWord = (newWord: INewWord) => {
  return execute.post(SAVE_NEW_WORD, newWord);
};
