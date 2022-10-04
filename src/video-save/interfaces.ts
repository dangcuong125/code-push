import { MediaType } from '@clvtube/common/constants/common.constants';

export interface IGetListUserSaveVideo {
  mediaType: MediaType;
  page?: number;
  limit?: number;
}

export interface IThumbnails {
  default: {
    url: string;
  };
}

export interface ITopic {
  key: string;
  slug: string;
  description: string;
}
export interface IVideosToTopics {
  id: number;
  topicKey: string;
  topic: ITopic;
}
export interface IVideo {
  name: string;
  desc: string;
  thumbnails: IThumbnails;
  videosToTopics: IVideosToTopics[];
}
export interface IVideoItem {
  id: number;
  startTime: number;
  videoId: number;
  video: IVideo;
}
