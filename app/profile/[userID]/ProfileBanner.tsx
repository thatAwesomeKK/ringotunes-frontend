import Image from 'next/image';
import React from 'react'

interface Props{
    uid: {pfp: string; username: string};
    ringsLength: number;
    likesCount: number;
}

const ProfileBanner = ({ uid, ringsLength, likesCount }: Props) => {
  
    return (
      <div className="flex space-x-10 p-8 items-center justify-start flex-row bg-gray-200 rounded-md mb-8 shadow-md">
        <div className="h-[200px] w-[200px] border border-black relative rounded-md">
          <Image
            src={uid?.pfp || "/images/default-profile-photo.png"}
            alt="im"
            placeholder="blur"
            blurDataURL="/assersDefaultImg.png"
            layout="fill"
          />
        </div>
        <div className="gap-3 flex flex-col">
          <h1 className="font-bold font-serif text-5xl text-black ">
            {uid?.username}
          </h1>
          <div className="flex flex-col items-start justify-start">
            <div className="text-l gap-3 flex  text-gray-400">
              <p>Total Ringtones</p>
              <p className="text-black">{ringsLength}</p>
            </div>
            <div className="text-l gap-3 flex  text-gray-400">
              <p>Total Likes</p>
              <p className="text-black">{likesCount}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileBanner;
  