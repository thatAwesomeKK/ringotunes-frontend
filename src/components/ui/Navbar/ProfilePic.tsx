import Image from "next/image";
import React from "react";
import { getPfp } from "@/lib/apiCalls/profile";

async function ProfilePic({ token }: { token: string }) {
  const pfp = await getPfp(token)

  return (
    <div
      className="h-12 w-12 overflow-hidden rounded-full relative"
    // onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        className="object-cover"
        src={pfp || "/images/default-profile-photo.png"}
        alt=""
        fill
      />
    </div>
  );
}

export default ProfilePic;
