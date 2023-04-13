import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../redux/users/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
}) 