import React from "react";
import ProfileBanner from "./ProfileBanner";
import FramerMotionDiv from "@/components/Providers/FramerMotionDiv";
import Feed from "@/components/Dashboard/Feed";
import { fetchUserInfo } from "@/lib/apiCalls/profile";

type PageProps = {
  params: {
    userID: string;
  };
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
      <Feed rings={userInfo.rings} del={false} />
    </FramerMotionDiv>
  );
};

export default Profile;
