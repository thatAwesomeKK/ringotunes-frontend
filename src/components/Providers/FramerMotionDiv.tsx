"use client";
import React from "react";

const FramerMotionDiv = ({ children }: any) => {
  return (
    <div className="ml-0 sm:ml-[var(--sidebar-close-width)]">
      {children}
    </div>
  );
};

export default FramerMotionDiv;
