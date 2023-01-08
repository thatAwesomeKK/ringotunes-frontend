import React from "react";
import FramerMotionDiv from "../../(Layout)/FramerMotionDiv";
import Feed from "./Feed";
import ProfileBanner from "./ProfileBanner";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

type PageProps = {
  params: {
    userID: string;
  };
};

const fetchUserInfo = async (userID: string) => {
  const res = await fetch(`${hostname}/user/profile/${userID}`, {
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};

const Profile = async ({ params: { userID } }: PageProps) => {
  const userInfo = await fetchUserInfo(userID);

  return (
    <FramerMotionDiv>
      <ProfileBanner
        uid={userInfo?.uid}
        ringsLength={userInfo?.rings?.length}
        likesCount={userInfo.likesCount}
      />
      <Feed rings={userInfo?.rings} uid={userInfo?.uid} />
    </FramerMotionDiv>
  );
};

export default Profile;
