import Link from "next/link";
import { IoMdCloudUpload } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
// import DropDown from "./(DropDown)/DropDown";
import { Permanent_Marker } from "next/font/google";
import ReduxProvider from "../Providers/ReduxProvider";
import ProfilePic from "./Navbar/ProfilePic";
import SideBarButton from "./Navbar/SideBarButton";
import { store } from "@/lib/redux/store";

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const token = store.getState().accessToken.token

  return (
    <nav className="flex justify-between items-center px-4 h-20 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-2">
        <ReduxProvider>
          {token && <SideBarButton />}
        </ReduxProvider>
        <Link href={'/'} className={`${permanent_marker.className} text-2xl`}>RingoTunes</Link>
      </div>
      <div className="flex space-x-2">
        {token ? (
          <div className="flex justify-center items-center space-x-2">
            <Link
              href={"/upload"}
              className="flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full cursor-pointer"
            >
              <IoMdCloudUpload className="h-6 w-6 text-blue-400" />
              <p className="text-blue-500">Upload</p>
            </Link>
            <div className="relative">
              <ProfilePic token={token} />
              {/* <DropDown /> */}
            </div>
          </div>
        ) : (
          <Link
            href={"/signin"}
            className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
          >
            <IoLogInSharp className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">SignIn</p>
          </Link>
        )}
        {!token && (
          <Link
            href={"/signup"}
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
