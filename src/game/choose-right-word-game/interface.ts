export interface IInitialState {
  index: number;
  answerIsChosen: string;
  amountQuestionAndAnswers: IAmountQuestionAndAnswers[];
  correctAnswer: string;
  answers: any;
  questionAndAnswers: null | IQuestionAndAnswers;
  correctAnswers: boolean[];
}
export interface IAmountQuestionAndAnswers {
  id: number;
  word: string;
  answers: string[];
}
export interface IAnswer {
  answerInfo: {
    content: string;
    isClicked: boolean;
    bgColor: string;
  };
}
export interface IQuestionAndAnswers {
  id: number;
  question: string;
  answers: IAnswer[];
}
