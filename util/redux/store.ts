import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './slices/tokenSlice'

export const store = configureStore({
  reducer: {
    accessToken: tokenSlice,
  },
})