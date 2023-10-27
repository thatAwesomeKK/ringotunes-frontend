import React from "react";
import { checkLike } from "@/lib/apiCalls/profile";
import ActivityButton from "./ActivityButton";
import { cookies } from "next/headers";
import ProvidesQueryClient from "@/components/Providers/ProvidesQueryClient";

interface Props {
  docId: string;
  likes: Array<string>;
  ringId: string;
  title: string;
}

const Activity = async ({ docId, ringId, title }: Props) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value as string
  const like = await checkLike(accessToken, docId)

  return (
    <div className="flex space-x-2 mb-4">
      <ProvidesQueryClient>
        <ActivityButton docId={docId} ringId={ringId} title={title} like={like} />
      </ProvidesQueryClient>
    </div>
  );
};

export default Activity;
