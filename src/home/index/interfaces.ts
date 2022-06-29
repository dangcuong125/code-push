import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/Root';

export interface IVideoTypeCarousel {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  isSelected?: boolean;
  color?: string;
  bgColor?: string;
  key: string;
  slug: string;
  description: string;
  enabled: number;
  translates: [];
}
interface IVideoListCarousel {
  id: number;
  title: string;
  image: HTMLImageElement;
  content: string;
  suggestion: string;
}
export interface IInitialState {
  videoTypeCarousel: IVideoTypeCarousel[];
  videoList: IVideoListCarousel[];
  podcastTypeCarousel: IVideoTypeCarousel[];
}
export interface IVideoListCarouselProps {
  item: IVideoListCarousel;
}
export interface VideoTypeCarouselProps {
  item: IVideoTypeCarousel;
  onPress?: () => void;
}

export interface IDiscountBanner {
  id: number;
  image: HTMLImageElement;
}
export interface IDiscountBannerProps {
  item: IDiscountBanner;
}

interface IReviseNewWordAnswerItem {
  id: number;
  meaning: string;
  isCorrected: boolean;
}
export interface IReviseNewWordItem {
  id: number;
  word: string;
  spelling: string;
  answers: IReviseNewWordAnswerItem[];
}
export interface IDataViewRecently {
  id: number;
  image: HTMLImageElement;
  title: string;
  content: string;
  progress: number;
}
export interface IPodcast {
  id: number;
  image: HTMLImageElement;
  title: string;
  hashtag: string;
}
export interface IPodcastTypes {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  isSelected?: boolean;
  color?: string;
  bgColor?: string;
  key: string;
  slug: string;
  description: string;
  enabled: number;
  translates: [];
}
export interface IPodcastTypeCarouselProps {
  item: IPodcastTypes;
  onPress: () => void;
}
export interface IAudioTopicItem {
  id: number;
  topicKey: string;
  audioId: number;
  topic: {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    version: number;
    key: string;
    slug: string;
    description: string;
    enabled: number;
    translates: [];
  };
}
// export interface IAudioToTopics {
//   IAudioTopicItem[]
// }
export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
