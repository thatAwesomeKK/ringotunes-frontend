import React from "react";
import { ringtoneBody } from "../../../../typings";
import Feed from "../../Feed";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRings = async () => {
  const res = await fetch(`${hostname}/ring/files?page=1&limit=4`);
  const payload = await res.json();
  const rings: [ringtoneBody] = payload.ring;
  return rings;
};

async function FeedLayout() {
  const rings = await fetchRings();
  return <Feed rings={rings} />;
}

export default FeedLayout;
