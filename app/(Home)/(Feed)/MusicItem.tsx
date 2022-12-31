import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { ringtoneBody } from "../../../typings";
import { useDispatch } from "react-redux";
import { storeRing } from "../../../util/redux/slices/ringtoneSlice";

const MusicItem = ({
  _id,
  ringID,
  uid,
  title,
  thumbnail,
  likes,
}: ringtoneBody) => {
  // const dispatch = useDispatch();

  // const ringClick = async () => {
  //   dispatch(storeRing(id));
  // };

  return (
    <div className="bg-slate-200 rounded-lg w-[97%] py-2 px-3 relative">
      <div
        // onClick={() => console.log("Listen!")}
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
          <p>Uploaded By {uid?.username}</p>
        </div>
      </div>
      <div className="absolute right-10 top-10 cursor-pointer flex space-x-7">
        {/* <div className="flex space-x-1">
          {checkLike(likes) ? (
            <AiFillLike
              onClick={() => handleLike(id, likes, mutate)}
              className="h-6 w-6 active:text-red-400"
            />
          ) : (
            <AiOutlineLike
              onClick={() => handleLike(id, likes, mutate)}
              className="h-6 w-6 active:text-red-4"
            />
          )}
          <p>{likes.length}</p>
        </div> */}
        {/* <HiOutlineDownload
          onClick={() => downloadRing(id, ringtone, title)}
          className="h-6 w-6"
        /> */}
      </div>
    </div>
  );
};

export default MusicItem;
