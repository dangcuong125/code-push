import { MediaType } from '@clvtube/common/constants/common.constants';

export interface IGetListUserSavePodcast {
  mediaType: MediaType;
  page?: number;
  limit?: number;
}

export interface IThumbnail {
  id: number;
  url: string;
}

export interface IAudioThumbnail {
  id: number;
  thumbnail: IThumbnail;
}

export interface ITopic {
  key: string;
  slug: string;
  description: string;
}

export interface IAudiosToTopics {
  id: number;
  topic: ITopic;
}

export interface IAudio {
  id: number;
  title: string;
  desc: string;
  audioThumbnail: IAudioThumbnail;
  audiosToTopics: IAudiosToTopics[];
}

export interface IPodcastItem {
  id: number;
  startTime: number;
  audioId: number;
  audio: IAudio;
}
