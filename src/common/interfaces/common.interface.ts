// interface
import { ReactElement } from 'react';

export interface CarouselProps {
  data?: Array<number | Object>;
  component: ReactElement<any, any>;
}
export interface ItemProps {
  index: number;
  scrollX: number;
  component: ReactElement<any, any>;
}
