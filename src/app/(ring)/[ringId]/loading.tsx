import FramerMotionDiv from "@/components/Providers/FramerMotionDiv";
import React from "react";

function Loading() {
  return (
    <FramerMotionDiv>
      <div className="h-[32vh] px-7 py-5 bg-gray-200 flex flex-col gap-2 animate-pulse">
        <div className='h-[20%] w-[30%] bg-gray-300 rounded-lg'></div>
        <div className='h-[10%] w-[30%] bg-gray-300 rounded-lg'></div>
        <div className='h-[70%] flex space-x-3'>
          <div className='h-full w-[10%] bg-gray-300 rounded-lg'></div>
          <div className='h-[35%] w-[30%]'>
            <div className='h-[55%] w-[60%] bg-gray-300 rounded-lg'></div>
            <div className='h-[70%] w-[60%] flex mt-2 gap-3'>
              <div className='h-full w-full bg-gray-300 rounded-lg'></div>
              <div className='h-full w-full bg-gray-300 rounded-lg'></div>
            </div>
          </div>
        </div>
      </div>
    </FramerMotionDiv>
  )
}

export default Loading;
