"use client";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle } from "../util/redux/slices/sidebarSlice";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import SidebarItem from "./(Sidebar)/SidebarItem";
import { sidebarItems } from "./(Sidebar)/SidebarData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { selectToken } from "../util/redux/slices/tokenSlice";
import { useAuthContext } from "./Context/AuthContext";
import { useSideBarContext } from "./Context/SideBarContext";
import { alertCall } from "../util/toast/alertCall";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const spring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
};

const Sidebar = () => {
  const { isOpen } = useSideBarContext();
  const { token } = useAuthContext();
  const pathname = usePathname();

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
    alertCall('success', payload.message || payload.error)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      {token && (
        <motion.div
          initial={{ width: "--sidebar-close-width" }}
          transition={spring}
          animate={{
            width: isOpen
              ? "var(--sidebar-open-width)"
              : "var(--sidebar-close-width)",
          }}
          className="fixed hidden left-0 bg-slate-50 z-10 px-2 py-5 border-2 rounded-r-lg sm:flex flex-col justify-between h-[92%]"
        >
          <div>
            {Object.values(sidebarItems).map((item, i) => (
              <Link key={i} href={item.link}>
                <SidebarItem
                  Icon={item.Icon}
                  MenuName={item.MenuName}
                  active={activeMenu?.id === item.id ? true : false}
                />
              </Link>
            ))}
          </div>
          <div>
            <hr className="border-t-2 border-black" />
            <Link href={"/dashboard"}>
              <SidebarItem Icon={MdSpaceDashboard} MenuName={"Dashboard"} />
            </Link>
            <div onClick={() => handleLogout()}>
              <SidebarItem Icon={IoLogOut} MenuName={"SignOut"} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
