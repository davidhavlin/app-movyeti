import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/user/UserSlice'
import globalReducer from './GlobalSlice'

const store = configureStore({
  reducer: {
    //   posts: postsReducer,
    //   comments: commentsReducer,
    global: globalReducer,
    users: usersReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
