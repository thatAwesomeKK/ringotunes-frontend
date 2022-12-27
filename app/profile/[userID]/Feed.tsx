import React from "react";
import MusicItem from "../../(Home)/(Feed)/MusicItem";
import { ringtoneBody } from "../../../typings";

interface Props {
  rings: ringtoneBody[];
  uid: {pfp: string; username: string};
}

const Feed = ({ rings, uid }: Props) => {
  return (
    <div>
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
