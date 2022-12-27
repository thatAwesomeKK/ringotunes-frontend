"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../../util/redux/slices/tokenSlice";
import { saveAs } from 'file-saver';
const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Props {
  docID: string;
  likes: Array<string>;
  ringID: string;
  title: string;
}

const Activity = ({ docID, likes, ringID, title }: Props) => {
  const [likeRes, setLikeRes] = useState({});
  const [like, setLike] = useState(false);
  const token = useSelector(selectToken);

  //Handle Download
  const handleDownload = async()=>{
    saveAs(`${hostname}/ring/download/${ringID}`, `${title}: Ringotunes`);
  }

  //Handling Like
  const handleLike = async () => {
    const res = await fetch(`${hostname}/user/handle-like`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken: token,
      },
      body: JSON.stringify({ docID }),
    });
    const likedRes = await res.json();
    
    setLikeRes(likedRes);
  };

  //Checking Like!
  useEffect(() => {
    const checkLike = async () => {
      const res = await fetch(`${hostname}/user/check-like`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "blob",
          accessToken: token,
        },
        body: JSON.stringify({ docID }),
      });
      const checkedLike = await res.json();
      setLike(checkedLike);
    };
    checkLike();
  }, [likeRes]);

  return (
    <div className="flex space-x-2 mb-4">
      <button onClick={()=>handleDownload()}
        className="bg-green-400 w-36 py-3 rounded-xl"
      >
        Download
      </button>
      {!like ? (
        <button
          onClick={() => handleLike()}
          className="bg-blue-500 w-36 py-3 rounded-xl"
        >
          Like
        </button>
      ) : (
        <button
          onClick={() => handleLike()}
          className="bg-red-500 w-36 py-3 rounded-xl"
        >
          UnLike
        </button>
      )}
    </div>
  );
};

export default Activity;
