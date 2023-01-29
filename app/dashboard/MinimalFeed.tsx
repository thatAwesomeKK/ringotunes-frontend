"use client";
import React from "react";
import useSWR from "swr";
import MusicItem from "../(Home)/(Feed)/MusicItem";
import { ringtoneBody } from "../../typings";
import { fetchUserRings } from "../../util/fetchers/fetchers";
import { useAuthContext } from "../Context/AuthContext";

type Props = {
  fetchKey: string;
};

function Feed({ fetchKey }: Props) {
  const { token } = useAuthContext();
  const {
    data: rings,
    error,
    isValidating,
    isLoading,
  } = useSWR(token ? fetchKey : null, () =>
    fetchUserRings(token, fetchKey)
  );
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

export default Feed;
