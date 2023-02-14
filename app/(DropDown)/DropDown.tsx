"use client";
import React, { useMemo } from "react";
import DropDownItem from "./DropDownItem";
import { sidebarItems } from "../(Sidebar)/SidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDropDownContext } from "../Context/DropDownContext";
import { MdSpaceDashboard } from "react-icons/md";
import { useAuthContext } from "../Context/AuthContext";
import { alertCall } from "../../util/toast/alertCall";
import { IoLogOut } from "react-icons/io5";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

function DropDown() {
  const pathname = usePathname();
  const { isOpen } = useDropDownContext();
  const { token } = useAuthContext();

  //Using useMemo to prevent Spam Re-Renders
  const activeMenu = useMemo(
    () => Object.values(sidebarItems).find((menu) => menu.link === pathname),
    [pathname]
  );

  //handling Logging Out!
  const handleLogout = async () => {
    const res = await fetch(`${hostname}/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: token,
      },
      credentials: "include",
    });
    const payload = await res.json();
    alertCall("success", payload.message || payload.error);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <div className="sm:hidden flex flex-col absolute bg-gray-300 space-y-2 rounded-md p-3 right-0">
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
        </div>
      )}
    </>
  );
}

export default DropDown;
