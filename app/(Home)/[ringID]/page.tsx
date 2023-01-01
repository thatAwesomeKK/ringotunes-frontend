import React from "react";
import Image from "next/image";
import { ringtoneBody } from "../../../typings";
import Activity from "./(Components)/Activity";
import Player from "./(Components)/Player";
import Time from "./(Components)/Time";
import FramerMotionDiv from "../../(Layout)/FramerMotionDiv";
import Link from "next/link";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

type PageProps = {
  params: {
    ringID: string;
  };
};

const fetchRing = async (ringID: string) => {
  const res = await fetch(`${hostname}/ring/getone/${ringID}`);
  const ring: ringtoneBody = await res.json();
  return ring;
};

const Banner = async ({ params: { ringID } }: PageProps) => {
  const ring = await fetchRing(ringID);

  return (
    <FramerMotionDiv>
      <div className="bg-gray-200 shadow-lg px-7 py-5">
        <h2 className="text-4xl font-extrabold">{ring?.title}</h2>
        <div className="text-gray-400 flex space-x-2">
          <Link href={`/profile/${ring?.uid?._id}`}>
          <p className="active:text-blue-300">
            Uploaded By: {ring?.uid?.username}
          </p>
          </Link>
          <Time createdAt={ring?.createdAt} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-3 mt-5">
          <div className="relative h-48 w-48">
            <Image
              className="object-cover rounded-lg"
              src={
                ring?.thumbnail ||
                "https://firebasestorage.googleapis.com/v0/b/ringtonedownloader-e8aae.appspot.com/o/ringtones%2Fbollywood%2Fgx5NYgw227136W0j3XnK%2FBacchan%20Pandey%20BGMimg?alt=media&token=f3b91161-cd29-4650-8fb1-ba4ed17c85eb"
              }
              alt="photu"
              fill={true}
            />
          </div>
          <div>
            <div className="mb-6">
              <p className="text-xl font-semibold text-center">
                DOWNLOADS {ring?.downloads?.length} | LIKES {ring?.likes?.length}
              </p>
                <Activity docID={ring?._id} likes={ring?.likes} ringID={ring?.ringID} title={ring?.title} />
              <Player ringID={ring?.ringID} />
            </div>
          </div>
        </div>
      </div>
    </FramerMotionDiv>
  );
};

export default Banner;
