'use client'
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storeRing } from "../../util/redux/slices/ringtoneSlice";
import { IoTrash } from "react-icons/io5";
import { ringtoneBody } from "../../typings";

const MusicItem = ({
  _id,
  title,
  thumbnail,
  likes,
  ringID,
  origin,
}: ringtoneBody) => {

  return (
    <div
      // onClick={ringClick}
      className="bg-slate-200 rounded-lg w-[97%] py-2 px-3 relative"
    >
      <div
        onClick={() => console.log("Listen!")}
        className="flex items-center space-x-5 w-full"
      >
        <div className="relative h-20 w-20 shadow-lg ">
          <Image
            className="object-cover rounded-lg"
            src={
              thumbnail ||
              "https://firebasestorage.googleapis.com/v0/b/ringtonedownloader-e8aae.appspot.com/o/ringtones%2Fbollywood%2Fgx5NYgw227136W0j3XnK%2FBacchan%20Pandey%20BGMimg?alt=media&token=f3b91161-cd29-4650-8fb1-ba4ed17c85eb"
            }
            alt="photu"
            fill={true}
          />
        </div>
        <div>
          <p className="font-medium text-xl">{title}</p>
        </div>
      </div>
      <div className="absolute right-10 top-10 cursor-pointer flex space-x-7">
        <IoTrash
          // onClick={() => deleteRingfromFirebase(id, origin, title)}
          className="h-6 w-6 hover:scale-110 active:text-red-600"
        />
      </div>
    </div>
  );
};

export default MusicItem;
