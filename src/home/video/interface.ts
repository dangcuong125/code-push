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
export interface IVideoTypeCarouselProps {
  item: IVideoTypeCarousel;
  onPress?: () => void;
}
export interface IVideoListCarousel {
  id: number;
  title: string;
  image: HTMLImageElement;
  content: string;
  suggestion: string;
}
export interface IInitialState {
  videoTopics: IVideoTypeCarousel[];
}
