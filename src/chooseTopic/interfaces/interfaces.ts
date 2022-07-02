export interface IInitialStateLevelTopic {
  level: IDataLevelOrTopic[];
  topic: IDataLevelOrTopic[];
}

export interface IDataLevelOrTopic {
  createdAt: string;
  updateAt: string;
  deleteAt: string;
  version: number;
  key: string;
  slug: string;
  description: string;
  enabled: number;
  translates: ITranslates[];
}

export interface ITranslates {
  createAt: string;
  updateAt: string;
  deleteAt: string;
  version: number;
  id: number;
  name: string;
  lang: string;
  levelKey?: string;
  topicKey?: string;
}
