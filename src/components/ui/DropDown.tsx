"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogInSharp, IoLogOut } from "react-icons/io5";
import { sidebarItems } from "./Sidebar/SidebarData";
import DropDownItem from "./DropDownItem";
import { handleLogout } from "@/lib/apiCalls/auth"
import { useAppSelector } from "@/lib/redux/store";

function DropDown() {
  const pathname = usePathname();
  const isOpen = useAppSelector(store => store.dropdown.isOpen)
  const user = useAppSelector(store => store.user.user)

  //Using useMemo to prevent Spam Re-Renders
  const activeMenu = useMemo(
    () => Object.values(sidebarItems).find((menu) => menu.link === pathname),
    [pathname]
  );

  return (
    <>
      {isOpen && <>
        {user ? <div className="flex flex-col absolute bg-gray-300 space-y-2 rounded-md p-3 right-0">
          {Object.values(sidebarItems).map((item, i) => (
            <Link key={i} href={item.link}>
              <DropDownItem
                Icon={item.Icon}
                MenuName={item.MenuName}
                active={activeMenu?.id === item.id ? true : false}
              />
            </Link>
          ))}
          <hr className="border-t-2 border-black" />
          <div className="space-y-2">
            <Link href={"/dashboard"}>
              <DropDownItem Icon={MdSpaceDashboard} MenuName={"Dashboard"} />
            </Link>
            <div onClick={() => handleLogout()}>
              <DropDownItem Icon={IoLogOut} MenuName={"SignOut"} />
            </div>
          </div>
        </div> : <div className="flex flex-col absolute bg-gray-300 rounded-xl p-3 right-0 w-56 gap-2">
          <Link href={"/signin"}>
            <DropDownItem Icon={IoLogInSharp} MenuName={"SignIn"} />
          </Link>
          <Link href={"/signup"}>
            <DropDownItem Icon={IoLogInSharp} MenuName={"SignUp"} />
          </Link>
        </div>}
      </>}
    </>
  )
}

export default DropDown;
