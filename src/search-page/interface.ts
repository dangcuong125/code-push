import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

export interface IInitialState {
  valueInputSearch: string;
  searchResult: ISearchResult[];
  videoSearchResult: ISearchResult[];
  podcastSearchResult: ISearchResult[];
}
export interface ISearchResult {
  id: number;
  name: string;
  desc: string;
  media_type: string;
  image?: string;
}
export type SearchPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Search'
>;
