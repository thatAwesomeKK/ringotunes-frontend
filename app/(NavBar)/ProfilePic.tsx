"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { getPfp } from "../../util/fetchers/fetchers";
import { useAuthContext } from "../Context/AuthContext";

function ProfilePic() {
  const { token } = useAuthContext();
  const { data: pfp, isValidating } = useSWR(token ? "/user/info" : null, () =>
    getPfp(token)
  );

  return (
    <div className="h-12 w-12 overflow-hidden rounded-full">
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
