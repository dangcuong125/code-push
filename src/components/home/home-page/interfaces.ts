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
  image: HTMLImageElement
  content: string
  suggestion: string
}
export interface IInitialState {
  videoTypeCarousel: IVideoTypeCarousel[]
  videoList: IVideoListCarousel[]
}
export interface IVideoListCarouselProps {
  item: IVideoListCarousel
}
export interface VideoTypeCarouselProps {
  item: IVideoTypeCarousel
  onPress: () => void
}

export interface IDiscountBanner {
  id: number
  image: HTMLImageElement
}
export interface IDiscountBannerProps {
  item: IDiscountBanner
}

interface IReviseNewWordAnswerItem {
  id: number
  meaning: string
  isCorrected: boolean
}
export interface IReviseNewWordItem {
  id: number
  word: string
  spelling: string
  answers: IReviseNewWordAnswerItem[]
}
export interface IDataViewRecently {
  id: number
  image: HTMLImageElement
  title: string
  content: string
  progress: number
}
export interface IPodcast {
  id: number
  image: HTMLImageElement
  title: string
  hashtag: string
}
export interface IPodcastTypes {
  id: null | number
  type: string
  isSelected: boolean
  backgroundColor: string
  color: string
}
export interface IPodcastTypeCarouselProps {
  item: IPodcastTypes
  onPress: () => void
}
export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>
