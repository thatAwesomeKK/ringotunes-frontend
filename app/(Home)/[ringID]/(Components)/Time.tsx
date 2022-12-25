"use client";
import React from "react";
import TimeAgo from "react-timeago";

type Props = {
  createdAt: string;
};

const Time = ({ createdAt }: Props) => {
  return (
    <p>
      Uploaded <TimeAgo date={createdAt} />
    </p>
  );
};

export default Time;
