import Link from "next/link";
import { IoMdCloudUpload } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { Permanent_Marker } from "next/font/google";
import ReduxProvider from "../Providers/ReduxProvider";
import ProfilePic from "./Navbar/ProfilePic";
import SideBarButton from "./Navbar/SideBarButton";
import { store } from "@/lib/redux/store";
import UserButton from "./Navbar/UserButton";

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const user = store.getState().user.user

  return (
    <nav className="flex justify-between items-center px-4 h-20 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-2">
        <ReduxProvider>
          {user && <SideBarButton />}
        </ReduxProvider>
        <Link href={'/'} className={`${permanent_marker.className} text-2xl`}>RingoTunes</Link>
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
