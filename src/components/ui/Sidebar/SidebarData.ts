import { FcLike } from "react-icons/fc";
import { HiFolderDownload } from "react-icons/hi";
import { FaHome, FaUserCog } from "react-icons/fa";

export const sidebarItems = {
  home: {
    id: 1,
    Icon: FaHome ,
    MenuName: "Home",
    link: "/",
    matcher: "/:path*",
  },
  likedrings:{
    id:3,
    Icon: FcLike,
    MenuName: "Your Liked Rings",
    link: "/dashboard/myliked",
    matcher: "/dashboard/myliked",
  },
  downloadedrings:{
    id:5,
    Icon: HiFolderDownload,
    MenuName: "Downloaded Rings",
    link: "/dashboard/mydownloads",
    matcher: "/dashboard/mydownloads",
  },
  usersettings:{
    id:6,
    Icon: FaUserCog,
    MenuName: "Profile Settings",
    link: "/dashboard/profile",
    matcher: "/dashboard/profile"
  }
};
