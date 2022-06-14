import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@clvtube/common/navigators/Root'

export interface IVideoTypeCarousel {
  id: number
  type: string
  isSelected: boolean
  backgroundColor: string
  color: string
}
interface IVideoListCarousel {
  id: number
  title: string
  image: any
  content: string
  suggestion: string
}
export interface IInitialState {
  videoTypeCarousel: IVideoTypeCarousel[]
  videoList: IVideoListCarousel[]
}
export interface VideoTypeCarouselProps {
  item: IVideoTypeCarousel
  onPress: () => void
}
export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>
