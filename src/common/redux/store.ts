import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as videoDetails } from '@clvtube/z-video-details/reducer/videoDetails';
import { reducer as podcastList } from '@clvtube/home/podcast/reducer/podcastList';
import { reducer as homePage } from '@clvtube/home/index/redux/homePage';
import { reducer as authReducer } from '@clvtube/auth/slice';
import { reducer as topicReducer } from '@clvtube/level-topic/slice';
import { reducer as videoList } from '@clvtube/home/video/reducer/videoList';
import { reducer as videoReducer } from '@clvtube/home/video/slice';
import { reducer as videoItemReducer } from '@clvtube/video-detail/playingVideo/slice';
import { reducer as podcastDetail } from '@clvtube/podcast-detail/reducer/podcastDetail';
import { reducer as accountReducer } from '@clvtube/account/slice';
import { reducer as searchPageReducer } from '@clvtube/search-page/reducer/searchPage';
import { reducer as saveNewWordReducer } from '@clvtube/save-new-word/reducer/saveNewWord';
import { reducer as countDownForPreparingGame } from '@clvtube/game/count-down-screen/reducer/countDown';
import { reducer as gameChooseRightWordReducer } from '@clvtube/game/choose-right-word-game/reducer/gameChooseRightWord';

const rootReducer = combineReducers({
  videoDetails,
  podcastList,
  topicReducer,
  homePage,
  authReducer,
  accountReducer,
  videoList,
  videoReducer,
  videoItemReducer,
  podcastDetail,
  searchPageReducer,
  saveNewWordReducer,
  countDownForPreparingGame,
  gameChooseRightWordReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
