import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@clvtube/common/navigators/RootNavigator';

export interface IinitialState {
  numberTranscipt: number;
  totalTranscipt: number;
  loopVideo: boolean;
  previewVideo: boolean;
}
export type VideoDetailPageProps = NativeStackScreenProps<
  RootStackParamList,
  'VideoDetails'
>;
