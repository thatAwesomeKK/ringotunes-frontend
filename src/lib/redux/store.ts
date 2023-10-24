import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./slices/accessTokenSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sidebarSlice from "./slices/sidebarSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
