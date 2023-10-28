'use client'
import Image from "next/image";
import React from "react";
import { ringtoneBody } from "@/lib/typings/typings";
import { IoTrash } from "react-icons/io5";
import { deleteRing } from "@/lib/apiCalls/rings";
import { usePathname, useRouter } from "next/navigation";

interface PageProps {
  ring: ringtoneBody
  del?: boolean
}

const MusicItem = ({ ring, del }: PageProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleDelete = async () => {
    await deleteRing(ring._id)
    router.refresh()
  }

  return (
    <div
      className="bg-gray-300 rounded-lg w-[97%] py-2 px-3 relative"
    >
      <div
        className="flex items-center space-x-5 w-full"
      >
        <div className="relative h-20 w-20 shadow-lg ">
          <Image
            className="object-cover rounded-lg"
            src={
              ring.thumbnail ||
              "https://firebasestorage.googleapis.com/v0/b/ringtonedownloader-e8aae.appspot.com/o/ringtones%2Fbollywood%2Fgx5NYgw227136W0j3XnK%2FBacchan%20Pandey%20BGMimg?alt=media&token=f3b91161-cd29-4650-8fb1-ba4ed17c85eb"
            }
            alt="photu"
            fill={true}
          />
        </div>
        <div>
          <p className="font-medium text-xl">{ring.title}</p>
          {pathname !== "/dashboard" && <p>Uploaded By {ring.uid?.username}</p>}
        </div>
      </div>
      {del && <div className="absolute right-10 top-10 cursor-pointer flex space-x-7">
        <IoTrash
          onClick={() => handleDelete()}
          className="h-6 w-6 hover:scale-110 active:text-red-600"
        />
      </div>}
    </div>
  );
};

export default MusicItem;
