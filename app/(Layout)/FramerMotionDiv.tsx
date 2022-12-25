"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectToggle } from "../../util/redux/slices/sidebarSlice";
import { selectToken } from "../../util/redux/slices/tokenSlice";

const spring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
};

const FramerMotionDiv = ({ children }: any) => {
  // const token = useSelector(selectToken);
  // const isOpen = useSelector(selectToggle);

  return (
    <div className="ml-[var(--sidebar-close-width)]">
      {children}
    </div>
  );
};

export default FramerMotionDiv;
