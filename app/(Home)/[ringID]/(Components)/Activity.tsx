'use client'
import React from "react";

const Activity = () => {
  return (
    <div className="flex space-x-2 mb-4">
      <button onClick={()=>console.log("Download!")} className="bg-green-400 w-36 py-3 rounded-xl">Download</button>
      <button onClick={()=>console.log("Liked!")} className="bg-blue-500 w-36 py-3 rounded-xl">Like</button>
      <button onClick={()=>console.log("Unliked!")} className="bg-red-500 w-36 py-3 rounded-xl">UnLike</button>
    </div>
  );
};

export default Activity;
