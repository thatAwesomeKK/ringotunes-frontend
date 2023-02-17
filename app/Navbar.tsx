import Link from "next/link";
import { IoMdCloudUpload } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { cookies } from "next/headers";
import ProfilePic from "./(NavBar)/ProfilePic";
import SideBarButton from "./(NavBar)/SideBarButton";
import DropDown from "./(DropDown)/DropDown";
import { Permanent_Marker } from "@next/font/google";

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const nextCookies = cookies();
  const token = nextCookies.get("refreshToken")?.value;

  return (
    <nav className="flex justify-between items-center px-4 h-20 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-2">
        {token && <SideBarButton />}
        <Link href={'/'} className={`${permanent_marker.className} text-2xl`}>RingoTunes</Link>
      </div>
      <div className="flex space-x-2">
        {token && (
          <div className="flex justify-center items-center space-x-2">
            <Link
              href={"/upload"}
              className="flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full cursor-pointer"
            >
              <IoMdCloudUpload className="h-6 w-6 text-blue-400" />
              <p className="text-blue-500">Upload</p>
            </Link>
            <div className="relative">
              <ProfilePic />
              <DropDown />
            </div>
          </div>
        )}
        {!token && (
          <a
            href={"/auth/login"}
            className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
          >
            <IoLogInSharp className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">SignIn</p>
          </a>
        )}
        {!token && (
          <a
            href={"/auth/register"}
            className="cursor-pointer flex items-center space-x-1 h-11 border-2 border-blue-400 px-5 rounded-full"
          >
            <IoLogInSharp className="h-6 w-6 text-blue-400" />
            <p className="text-blue-500">SignUp</p>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
