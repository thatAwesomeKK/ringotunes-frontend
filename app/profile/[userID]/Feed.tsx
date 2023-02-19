import React from "react";
import MusicItem from "../../(Home)/(Feed)/MusicItem";
import { ringtoneBody } from "../../../typings";

interface Props {
  rings: ringtoneBody[];
  uid: { pfp: string; username: string };
}

const Feed = ({ rings, uid }: Props) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center bg-gray-300 rounded-xl py-4 shadow-md mx-4">
      {rings.map((ring, i) => (
        <MusicItem
          key={i}
          _id={ring._id}
          ringID={ring.ringID}
          uid={uid}
          title={ring.title}
          thumbnail={ring.thumbnail}
          origin={ring.origin}
          createdAt={ring.createdAt}
          likes={ring.likes}
        />
      ))}
    </div>
  );
};

export default Feed;
