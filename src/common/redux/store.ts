import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducer as videoDetails } from '@clvtube/components/video-details/redux/videoDetails'
import { reducer as podcastList } from '@clvtube/components/home/home-podcast/redux/podcastList'
import topicReducer from '@clvtube/components/level-topic/reducer/topicReducer'

const rootReducer = combineReducers({
  videoDetails,
  podcastList,
  topicReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store }
