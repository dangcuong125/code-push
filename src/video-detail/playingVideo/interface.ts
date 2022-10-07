import { IWordDefinition } from '@clvtube/common/interfaces/common.interface';

export interface IWord {
  content: string;
  isHighlighted: boolean;
}
export interface IVideoHighlightWord {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  id: number;
  videoId: number;
  evDictId: number;
  evDict: {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    version: number;
    idx: number;
    word: string;
    detail: string;
    example: null | string;
  };
}
export interface IInitialState {
  videoItem: {};
  videoItemIsConverted: IWord[];
  isSaveVideo: number;
  startTime: number;
  position: number;
  duration: number;
  wordIsClicked: string;
  videoHighlightWords: IVideoHighlightWord[];
  wordDefinition: null | IWordDefinition;
}
export interface IVideoTranscript {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  id: number;
  content: string;
  startTime: number;
  duration: number;
  videosId: number;
}
