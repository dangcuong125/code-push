import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducer as videoDetails } from '@clvtube/video-details/reducer/videoDetails'
import { reducer as podcastList } from '@clvtube/home/podcast/reducer/podcastList'
import topicReducer from '@clvtube/level-topic/reducer/topicReducer'
import { reducer as homePage } from '@clvtube/home/index/redux/homePage'

const rootReducer = combineReducers({
  videoDetails,
  podcastList,
  topicReducer,
  homePage,
})

const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store }
