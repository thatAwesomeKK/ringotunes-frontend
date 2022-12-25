"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloudUpload } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, toggleState } from "../util/redux/slices/sidebarSlice";
import { selectToken } from "../util/redux/slices/tokenSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectToggle);

  const token = useSelector(selectToken);

  return (
    <nav className="flex justify-between items-center px-4 h-20 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-2">
        <HiMenuAlt1
          onClick={() => dispatch(toggleState(!isOpen))}
          className="h-8 w-8 cursor-pointer"
        />
        <h1 className="text-lg">RingoTunes</h1>
      </div>
      <div className="flex space-x-2">
        {token && (
          <Link
            href={"/upload"}
            className="flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full cursor-pointer"
          >
            <IoMdCloudUpload className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">Upload</p>
          </Link>
        )}
        {!token && (
          <Link
            href={"/auth/login"}
            className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
          >
            <IoLogInSharp className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">SignIn</p>
          </Link>
        )}
        {!token && (
          <Link
            href={"/auth/register"}
            className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
          >
            <IoLogInSharp className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">SignUp</p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
