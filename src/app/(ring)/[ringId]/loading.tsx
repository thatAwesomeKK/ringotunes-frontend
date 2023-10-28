import FramerMotionDiv from "@/components/Providers/FramerMotionDiv";
import React from "react";

function Loading() {
  return (
    <FramerMotionDiv>
      <div className="px-7 py-5 bg-gray-200 flex flex-col gap-2 animate-pulse shadow-lg">
        <div className='h-11 w-96 bg-gray-300 rounded-lg'></div>
        <div className='h-6 w-80 bg-gray-300 rounded-lg'></div>
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center md:items-start md:gap-4'>
          <div className='h-48 w-48 bg-gray-300 rounded-lg'></div>
          <div className='mt-2'>
            <div className='h-10 w-80 bg-gray-300 rounded-lg'></div>
            <div className='h-14 w-80 flex mt-2 gap-2'>
              <div className='h-full w-full bg-gray-300 rounded-lg'></div>
              <div className='h-full w-full bg-gray-300 rounded-lg'></div>
            </div>
            <div className='h-16 w-80 bg-gray-300 rounded-lg mt-2'></div>
          </div>
        </div>
      </div>
    </FramerMotionDiv>
  )
}

export default Loading;
