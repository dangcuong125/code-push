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
interface IPodcastTypes {
  id: number;
  type: string;
  isSelected: boolean;
  backgroundColor: string;
  color: string;
}
interface IPodcastOutstanding {
  title: string;
  content: string;
  image: HTMLImageElement;
}
export interface IInitialState {
  podcastTypes: IPodcastTypes[];
  podcastOutstanding: IPodcastOutstanding[];
  podcastPopular: IPodcastOutstandingItem[];
}
interface IPodcastOutstandingItem {
  id: number;
  image: HTMLImageElement;
  title: string;
}
