import React from "react";
import Banner from "./(Home)/Banner";
import Feed from "./(Home)/Feed";
import FramerMotionDiv from "./(Providers)/FramerMotionDiv";

const Page = () => {
  return (
    <>
      {/*@ts-ignore */}
      <Banner />
      <FramerMotionDiv>
        {/*@ts-ignore */}
        <Feed />
      </FramerMotionDiv>
    </>
  );
};

export default Page;
