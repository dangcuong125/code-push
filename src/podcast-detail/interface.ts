import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

export type PodcastDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'PodcastDetail'
>;
export interface ITranscriptContent {
  type: string;
  content: string;
  start_time: string;
}
export interface ITranscriptItem {
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  version: number;
  id: number;
  content: ITranscriptContent[];
  startTime: string;
  audioId: number;
}
export interface IHelloWorld {
  startTime: string;
  offset: number;
}
export interface IInitialState {
  duration: number;
  position: number;
  heightOfParagraph: string;
  paragraphInfo: any;
  sliderValue: number;
  defaultValue: number;
  goBack: boolean;
  isLoading: boolean;
}
export interface IPodcastDetail {
  id: number;
  audioCode: string;
  audioTypeKey: string;
  title: string;
  desc: string;
  levelKey: string;
  audioThumbnail: {
    id: number;
    file: {
      id: number;
      key: string;
      type: string;
      uploaderId: number;
      url: string;
    };
    thumbnail: {
      id: number;
      key: string;
      type: string;
      uploaderId: number;
      url: string;
    };
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
    deletedAt: null;
    version: number;
    key: string;
    slug: string;
    description: string;
    enabled: number;
    translates: [];
  };
  audioHighlightWords: [];
  audioTranscripts: ITranscriptItem[];
}
