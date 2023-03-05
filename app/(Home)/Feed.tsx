"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ringtoneBody } from "../../typings";
import MusicItem from "./(Feed)/MusicItem";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchRings = async (page?: number) => {
  const res = await fetch(`${hostname}/ring/files?page=${page}&limit=4`);
  const payload = await res.json();
  const rings: [ringtoneBody] = payload.ring;
  return rings;
};

const Feed = ({ rings }: any) => {
  const [page, setPage] = useState<number>(1);
  const [clientFeed, setClientFeed] = useState<any>(null);

  useEffect(() => {
    console.log("Hello");
    const fetchRingsBuffer = async () => {
      const rings = await fetchRings(page);
      setClientFeed(rings);
      setPage(page + 1);
    };
    fetchRingsBuffer();
  }, []);

  const nextPage = async () => {
    const rings = await fetchRings(page);
    setClientFeed([...clientFeed, ...rings]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3 bg-gray-300 py-4 rounded-xl flex-1 m-4">
        {(clientFeed || rings)?.map((ring: any) => (
          <Link
            className="w-full flex justify-center items-center"
            href={`/${ring._id}`}
            key={ring._id}
          >
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
      <div className="flex justify-between mr-5 px-8">
        <button
          disabled={!clientFeed}
          onClick={() => nextPage()}
          className="bg-blue-400 py-2 px-5 rounded font-medium disabled:bg-blue-200 hover:bg-blue-500"
        >
          Load More..
        </button>
      </div>
    </>
  );
};

export default Feed;
