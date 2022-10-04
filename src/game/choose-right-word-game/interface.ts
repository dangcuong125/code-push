export interface IInitialState {
  index: number;
  isLoading: boolean;
  amountQuestionAndAnswers: IAmountQuestionAndAnswers[];
}
export interface IAmountQuestionAndAnswers {
  id: number;
  word: string;
  answers: string[];
}
