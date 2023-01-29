import Link from "next/link";
import React from "react";
import { ringtoneBody } from "../../typings";
import MusicItem from "./(Feed)/MusicItem";
const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRings = async () => {
  const res = await fetch(`${hostname}/ring/files?page=1&limit=4`);
  const payload = await res.json();
  const rings: [ringtoneBody] = payload.ring;
  return rings;
};

const Feed = async () => {
  const rings = await fetchRings();

  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-gray-300 py-4 rounded-xl flex-1 m-4">
      {rings?.map((ring) => (
        <Link className="w-full flex justify-center items-center" href={`/${ring._id}`} key={ring._id}>
          <MusicItem
            _id={ring._id}
            ringID={ring.ringID}
            uid={ring.uid}
            title={ring.title}
            thumbnail={ring.thumbnail}
            origin={ring.origin}
            createdAt={ring.createdAt}
            likes={ring.likes}
          />
        </Link>
      ))}
    </div>
  );
};

export default Feed;
