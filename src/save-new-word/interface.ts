import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

export type SaveNewWordProps = NativeStackScreenProps<
  RootStackParamList,
  'SaveNewWord'
>;
export interface IGroupItem {
  id: number;
  userId: number;
  title: string;
}
export interface ISavedWordItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  id: number;
  wordGroupId: number;
  evDictId: number;
  evDict: {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    version: number;
    idx: number;
    word: null | string;
    detail: string;
    example: null | string;
  };
}
export interface IInitialState {
  wordNeedToBeSaved: string;
  savedWordList: ISavedWordItem[];
  valueSelectFolder: string;
  isOpenSuccessfullModal: boolean;
  errorMessage: string;
}
export interface INewWord {
  evdictId: number;
  groupId: null | number;
}
export interface FormData {
  folder: string;
}
