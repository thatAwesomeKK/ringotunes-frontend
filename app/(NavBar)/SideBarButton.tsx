"use client";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSideBarContext } from "../Context/SideBarContext";

function SideBarButton() {
  const { setIsOpen, isOpen } = useSideBarContext();
  return (
    <HiMenuAlt1
      onClick={() => setIsOpen(!isOpen)}
      className="h-8 w-8 cursor-pointer hidden sm:flex"
    />
  );
}

export default SideBarButton;
