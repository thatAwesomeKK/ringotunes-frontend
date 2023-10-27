"use client";
import React, { useMemo } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import SidebarItem from "./Sidebar/SidebarItem";
import { sidebarItems } from "./Sidebar/SidebarData";
import { useAppSelector } from "@/lib/redux/store";
import { handleLogout } from "@/lib/apiCalls/auth";
import { usePathname } from "next/navigation";

const spring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
};

const Sidebar = () => {
  const isOpen = useAppSelector(store => store.sidebar.isOpen)
  const user = useAppSelector(store => store.user.user)
  const pathname = usePathname();

  //Using useMemo to prevent Spam Re-Renders
  const activeMenu = useMemo(
    () => Object.values(sidebarItems).find((menu) => pathname.startsWith(menu.matcher)),
    [pathname]
  );


  return (
    <div className="sm:flex hidden">
      {user && (
        <motion.div
          initial={{ width: "--sidebar-close-width" }}
          transition={spring}
          animate={{
            width: isOpen
              ? "var(--sidebar-open-width)"
              : "var(--sidebar-close-width)",
          }}
          className="fixed flex left-0 bg-slate-50 z-10 px-2 py-5 border-2 rounded-r-lg flex-col justify-between h-[92%]"
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
    </div>
  );
};

export default Sidebar;
