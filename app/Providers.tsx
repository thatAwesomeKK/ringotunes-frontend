'use client'
import React from "react";
import { Provider } from "react-redux";
import { store } from "../util/redux/store";
import AuthProvider from "./(Providers)/AuthProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default Providers;
