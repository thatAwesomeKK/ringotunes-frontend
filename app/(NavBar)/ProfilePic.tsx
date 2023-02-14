"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { getPfp } from "../../util/fetchers/fetchers";
import { useAuthContext } from "../Context/AuthContext";
import { useDropDownContext } from "../Context/DropDownContext";

function ProfilePic() {
  const { token } = useAuthContext();
  const { setIsOpen, isOpen } = useDropDownContext();
  const { data: pfp, isValidating } = useSWR(token ? "/user/info" : null, () =>
    getPfp(token)
  );

  return (
    <div
      className="h-12 w-12 overflow-hidden rounded-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        className="object-contain"
        src={pfp || "/images/default-profile-photo.png"}
        alt=""
        height={100}
        width={100}
      />
    </div>
  );
}

export default ProfilePic;
