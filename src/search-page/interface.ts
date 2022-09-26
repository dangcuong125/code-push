import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

export interface IInitialState {
  valueInputSearch: string;
  searchResult: ISearchResult[];
  videoSearchResult: ISearchResult[];
  podcastSearchResult: ISearchResult[];
  searchHistory: ISearchHistory[];
}
export interface ISearchResult {
  id: number;
  name: string;
  desc: string;
  media_type: string;
  image?: string;
}
export interface ISearchHistory {
  created_at: string;
  deletedAt: string;
  id: number;
  keyword: string;
  searchTime: string;
  userId: number;
}
export type SearchPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Search'
>;
