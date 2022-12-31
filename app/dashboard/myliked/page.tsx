"use client";
import React from "react";
import useSWR from "swr";
import MusicItem from "../../(Home)/(Feed)/MusicItem";
import { ringtoneBody } from "../../../typings";
import { useAuthContext } from "../../Context/AuthContext";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchLiked = async (token: string) => {
  const res = await fetch(`${hostname}/user/myliked`, {
    headers: { accessToken: token },
  });
  const rings = await res.json();
  return rings;
};

function MyLiked() {
  const { token } = useAuthContext();
  const {
    data: rings,
    error,
    isValidating,
    isLoading,
  } = useSWR(token ? "/dashboard/myliked" : null, () => fetchLiked(token));
  console.log(rings);

  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-gray-300 py-4 rounded-xl flex-1 mx-4">
      {rings?.rings?.map((ring: ringtoneBody) => (
        <MusicItem
          key={ring._id}
          _id={ring._id}
          title={ring.title}
          thumbnail={ring.thumbnail}
          origin={ring.origin}
          ringID={ring.ringID}
          createdAt={ring.createdAt}
          uid={ring.uid}
          likes={ring.likes}
        />
      ))}
    </div>
  );
}

export default MyLiked;
