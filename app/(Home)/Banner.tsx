import React from "react";
import Image from "next/image";
import { ringtoneBody } from "../../typings";
import FramerMotionDiv from "../(Layout)/FramerMotionDiv";
import Time from "./[ringID]/(Components)/Time";
import Activity from "./[ringID]/(Components)/Activity";
import Player from "./[ringID]/(Components)/Player";
import Link from "next/link";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRingRandom = async () => {
  const res = await fetch(`${hostname}/ring/getonerandom`, {
    cache: "no-cache",
  });
  const ring: ringtoneBody[] = await res.json();
  return ring;
};

const Banner = async () => {
  const ring = await fetchRingRandom();

  return (
    <FramerMotionDiv>
      <div className="bg-gray-200 shadow-lg px-7 py-5">
        <h2 className="text-4xl font-extrabold">{ring[0]?.title}</h2>
        <div className="text-gray-400 flex space-x-2">
          <Link href={`/profile/${ring[0]?.uid?._id}`}>
            <p className="active:text-blue-300">
              Uploaded By: {ring[0]?.uid?.username}
            </p>
          </Link>
          <Time createdAt={ring[0].createdAt} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-3 mt-5">
          <div className="relative h-48 w-48">
            <Image
              className="object-cover rounded-lg"
              src={
                ring[0]?.thumbnail ||
                "https://firebasestorage.googleapis.com/v0/b/ringtonedownloader-e8aae.appspot.com/o/ringtones%2Fbollywood%2Fgx5NYgw227136W0j3XnK%2FBacchan%20Pandey%20BGMimg?alt=media&token=f3b91161-cd29-4650-8fb1-ba4ed17c85eb"
              }
              alt="photu"
              fill
              priority
            />
          </div>
          <div>
            <div className="mb-6">
              <p className="text-xl font-semibold text-center">
                DOWNLOADS {ring[0]?.downloads?.length} | LIKES {ring[0]?.likes?.length}
              </p>
              <Activity
                docID={ring[0]._id}
                likes={ring[0].likes}
                ringID={ring[0].ringID}
                title={ring[0].title}
              />
              <Player ringID={ring[0]?.ringID} />
            </div>
          </div>
        </div>
      </div>
    </FramerMotionDiv>
  );
};

export default Banner;
