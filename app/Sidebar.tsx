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

const spring = {
  type: "spring",
  duration: 0.6,
  bounce: 0.3,
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectToggle);
  const token = useSelector(selectToken);
  const pathname = usePathname();

  //Using useMemo to prevent Spam Re-Renders
  const activeMenu = useMemo(
    () => Object.values(sidebarItems).find((menu) => menu.link === pathname),
    [pathname]
  );

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
            <div>
              <SidebarItem Icon={IoLogOut} MenuName={"SignOut"} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
