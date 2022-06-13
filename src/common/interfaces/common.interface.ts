// interface
import YouTube from 'react-native-youtube'
import { ReactElement } from 'react'

export interface CarouselProps {
  data?: Array<number | Object>
  component: ReactElement<any, any>
}
export interface ItemProps {
  index: number
  scrollX: number
  component: ReactElement<any, any>
}
