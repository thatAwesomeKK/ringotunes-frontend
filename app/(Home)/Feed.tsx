import Link from "next/link";
import React from "react";
import { ringtoneBody } from "../../typings";
import MusicItem from "./(Feed)/MusicItem";
const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRings = async () => {
  const res = await fetch(`${hostname}/ring/files`);
  const rings: [ringtoneBody] = await res.json();
  return rings;
};

const Feed = async () => {
  const rings = await fetchRings();

  return (
    <div>
      {rings.map((ring) => (
        <Link href={`/${ring._id}`} key={ring._id}>
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
