'use client'
import React from "react";
import { ringtoneBody } from "../../typings";
import MusicItem from "./MusicItem";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;



const Feed = ({rings}: any) => {
  return (
    <>
      <div className="flex flex-col space-y-4 justify-center items-center bg-gray-300 w-[80%] rounded-xl py-4 shadow-md">
        {rings?.map((ring: ringtoneBody) => (
          <MusicItem
            key={ring._id}
            _id={ring._id}
            title={ring.title}
            thumbnail={ring.thumbnail}
            origin={ring.origin}
            ringID={ring.ringID}
            createdAt={ring.createdAt}
            likes={ring.likes}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
