import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IWordDefinition } from '@clvtube/common/interfaces/common.interface';

export type PodcastDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'PodcastDetail'
>;
export interface ITranscriptContent {
  type: string;
  content: string;
  start_time: string;
  isHighlighted?: boolean;
  isDisplayColorizeText: boolean;
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
  heightOfParagraph: number;
  paragraphInfo: any;
  sliderValue: number;
  customAudioTranscripts: any;
  defaultValue: number;
  // paragraph: ITranscriptItem;
  wordDefinition: null | IWordDefinition;
  goBack: boolean;
  infoAudio: any;
  audioTranscripts: ITranscriptItem[];
  isLoading: boolean;
  isSaveAudio: number;
  audioHighLightWords: IAudioHighlightWordInPodcastDetail[];
  isInrangeOfStartTimeAndEndTime: number;
  endTimeOfParagraph: string;
  podcastSaveInfo: any;
  audioId: null | number;
  allTranscriptIds: number[];

  normalizedParagraph: any;
}
export interface IAudioHighlightWordInPodcastDetail {
  created_at: string;
  deletedAt: null | string;
  id: number;
  audioId: number;
  evDictId: number;
  evDict: {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    version: number;
    idx: number;
    word: string;
    detail: string;
    example: string;
  };
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
  audioHighlightWords: IAudioHighlightWordInPodcastDetail;
  audioTranscripts: ITranscriptItem[];
}
