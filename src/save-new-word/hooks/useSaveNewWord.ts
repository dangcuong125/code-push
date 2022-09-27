import { useMutation } from 'react-query';
import { saveNewWord } from '../services';

export const useSaveNewWord = () => {
  return useMutation(saveNewWord);
};
