import { configureStore } from '@reduxjs/toolkit'
import ringtoneSlice from './slices/ringtoneSlice'
import sidebarSlice from './slices/sidebarSlice'
import tokenSlice from './slices/tokenSlice'

export const store = configureStore({
  reducer: {
    accessToken: tokenSlice,
    sidebar: sidebarSlice,
    ringtone: ringtoneSlice,
  },
})