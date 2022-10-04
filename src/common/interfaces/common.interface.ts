// interface
import { ReactElement } from 'react';
import { MediaType } from '../constants/common.constants';

export interface CarouselProps {
  data?: Array<number | Object>;
  component: ReactElement<any, any>;
}
export interface ItemProps {
  index: number;
  scrollX: number;
  component: ReactElement<any, any>;
}

export interface IUserSaveMedia {
  mediaType: MediaType;
  videoId?: number;
  audioId?: number;
  startTime: number;
}
