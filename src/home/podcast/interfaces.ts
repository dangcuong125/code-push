import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

interface IItem {
  title: string;
  content: string;
  image: any;
}

export interface IItemPodcastOutstanding {
  item: IItem;
}
export interface IItemPodcastPopular {
  item: IPodcastOutstandingItem;
}

interface IPodcastOutstanding {
  title: string;
  content: string;
  image: HTMLImageElement;
}
export interface IInitialState {
  podcastTopics: IAllTopics[];
  podcastOutstanding: IPodcastOutstanding[];
  podcastPopular: IPodcastOutstandingItem[];
  podcastKeySelected: string;
}
interface IPodcastOutstandingItem {
  id: number;
  image: HTMLImageElement;
  title: string;
}
export interface IPopularTopics {
  topic_key: string;
  name: null | string;
  image_id: any;
}
export interface IPodcastListItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  id: number;
  audioCode: string;
  audioTypeKey: string;
  title: string;
  desc: string;
  levelKey: string;
  audioThumbnail: {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    version: number;
    id: number;
    audioId: number;
    fileId: number;
    thumbnailId: number;
  };
  audiosToTopics: [
    {
      id: number;
      topicKey: string;
      audioId: number;
      topic: null;
    },
  ];
  level: {
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
export interface IAllTopics {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  isSelected?: boolean;
  bgColor?: string;
  color?: string;
  key: string;
  slug: string;
  description: string;
  enabled: number;
  translates: [
    {
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
      version: number;
      id: number;
      name: string;
      lang: string;
      topicKey: string;
    },
  ];
}
export interface ITopicCarouselProps {
  item: IAllTopics;
  onPress: () => void;
}
export type PodcastListProps = NativeStackScreenProps<
  RootStackParamList,
  'Podcast'
>;
