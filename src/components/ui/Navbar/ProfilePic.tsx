import { store } from "@/lib/redux/store";
import Image from "next/image";
import React from "react";

function ProfilePic() {
  const user: any = store.getState().user.user

  return (
    <div
      className="h-12 w-12 overflow-hidden rounded-full relative border-2"
    >
      <Image
        className="object-cover"
        src={user?.pfp || "/images/default-profile-photo.png"}
        alt=""
        fill
      />
    </div>
  );
}

export default ProfilePic;
