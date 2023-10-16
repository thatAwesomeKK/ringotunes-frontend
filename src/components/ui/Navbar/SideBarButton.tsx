"use client";
import { toggleState } from "@/lib/redux/slices/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

function SideBarButton() {
  const isOpen = useAppSelector(store => store.sidebar.isOpen)
  const dispatch = useAppDispatch()
  return (
    <HiMenuAlt1
      onClick={() => dispatch(toggleState(!isOpen))}
      className="h-8 w-8 cursor-pointer sm:flex hidden"
    />
  );
}

export default SideBarButton;
