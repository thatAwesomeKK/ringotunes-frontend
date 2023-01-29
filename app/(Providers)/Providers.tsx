"use client";
import React from "react";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default Providers;
