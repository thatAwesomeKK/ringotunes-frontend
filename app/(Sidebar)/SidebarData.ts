import { FcLike } from "react-icons/fc";
import { HiFolderDownload } from "react-icons/hi";
import { FaHome, FaUserCog } from "react-icons/fa";

export const sidebarItems = {
  home: {
    id: 1,
    Icon: FaHome ,
    MenuName: "Home",
    link: "/",
  },
  likedrings:{
    id:3,
    Icon: FcLike,
    MenuName: "Your Liked Rings",
    link: "/dashboard/myliked",
  },
  downloadedrings:{
    id:5,
    Icon: HiFolderDownload,
    MenuName: "Downloaded Rings",
    link: "/dashboard/mydownloads",
  },
  usersettings:{
    id:6,
    Icon: FaUserCog,
    MenuName: "Profile Settings",
    link: "/profile"
  }
};
