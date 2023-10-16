import React from "react";
import { checkLike } from "@/lib/apiCalls/profile";
import { store } from "@/lib/redux/store";
import ActivityButton from "./ActivityButton";

interface Props {
  docId: string;
  likes: Array<string>;
  ringId: string;
  title: string;
}

const Activity = async ({ docId, ringId, title }: Props) => {
  const token = store.getState().accessToken.token
  const like = await checkLike(token, docId)

  return (
    <div className="flex space-x-2 mb-4">
      <ActivityButton token={token} docId={docId} ringId={ringId} title={title} like={like} />
    </div>
  );
};

export default Activity;
