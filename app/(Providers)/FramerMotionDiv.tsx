"use client";
import React from "react";

const spring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
};

const FramerMotionDiv = ({ children }: any) => {
  return (
    <div className="ml-0 sm:ml-[var(--sidebar-close-width)]">
      {children}
    </div>
  );
};

export default FramerMotionDiv;
