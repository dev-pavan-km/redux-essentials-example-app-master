import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationReducer from '../features/notifications/notificationsSlice'

export const store = configureStore({
  reducer: { posts: postsReducer, users: usersReducer, notifications: notificationReducer },
})
