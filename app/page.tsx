import React from "react";
import { ringtoneBody } from "../typings";
import Banner from "./(Home)/Banner";
import Feed from "./(Home)/Feed";
import FramerMotionDiv from "./(Providers)/FramerMotionDiv";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRings = async () => {
  const res = await fetch(`${hostname}/ring/files?page=1&limit=4`, {
    cache: "no-store",
  });
  const payload = await res.json();
  const rings: [ringtoneBody] = payload.ring;
  return rings;
};

const Page = async () => {
  const rings = await fetchRings();
  return (
    <>
      {/*@ts-ignore */}
      <Banner />
      <FramerMotionDiv>
        {/*@ts-ignore */}
        <Feed rings={rings} />
      </FramerMotionDiv>
    </>
  );
};

export default Page;
