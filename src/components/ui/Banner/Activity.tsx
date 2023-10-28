import React from "react";
import ActivityButton from "./ActivityButton";
import { cookies } from "next/headers";
import ProvidesQueryClient from "@/components/Providers/ProvidesQueryClient";
import { ringtoneBody } from "@/lib/typings/typings";

interface Props {
  ring: ringtoneBody
}

const Activity = async ({ ring }: Props) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value as string

  return (
    <ProvidesQueryClient>
      <ActivityButton ring={ring} accessToken={accessToken} />
    </ProvidesQueryClient>
  );
};

export default Activity;
