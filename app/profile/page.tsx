"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { alert } from "../../util/toast/alertCall";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const ProfileChange = () => {
  const { token } = useAuthContext();
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const uploadProfileImgRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm();

  const resetForm = () => {
    setProfileImg(null);
    reset();
  };

  //Picking Up From system and adding to UploadRingImage State
  const addImageToUpload = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setProfileImg(readerEvent.target?.result! as string);
    };
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const id = toast.loading("Updating profile...");
    const res = await fetch(`${hostname}/auth/update`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken: token,
      },
      body: JSON.stringify({
        pfp: profileImg,
        username: data.username,
      }),
    });
    const payload = await res.json();
    alert(payload, id);
    setLoading(false);
  };

  return (
    <div className="h-[90vh] justify-center items-center flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center space-y-5 items-center bg-white 2xl:w-[30%] lg:w-[50%] w-[70%] h-[70%] rounded-xl shadow-lg"
      >
        {/* Select & Preview The Profile Image */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={() => uploadProfileImgRef.current?.click()}
        >
          <div className="relative h-32 w-32 group overflow-hidden rounded-full border-2">
            <Image
              className="object-cover rounded-full hover:scale-150 transition duration-150 ease-in-out"
              src={profileImg || "/images/default-profile-photo.png"}
              alt=""
              fill={true}
            />
          </div>
          <p className="font-light text-lg">Select DP</p>
          <input
            ref={uploadProfileImgRef}
            hidden
            type="file"
            accept="image/x-png,image/jpeg,image/png,image/jpg"
            onChange={(e: any) => addImageToUpload(e)}
          />
        </div>
        <input
          type="text"
          {...register("username")}
          className="p-2 border bg-slate-100 rounded-lg w-[70%] focus:outline-blue-300 focus:shadow-outline"
          placeholder="Update Name"
        />
        <button
          type="submit"
          className=" bg-purple-400 hover:bg-purple-500 rounded-xl hover:font-medium text-lg py-3 px-5 shadow-xl hover:scale-105 transition duration-150 ease-in-out"
        >
          Update Your Profile
        </button>
        <button
          type="reset"
          onClick={() => resetForm()}
          className=" bg-red-400 hover:bg-red-500 rounded-xl hover:font-medium text-lg py-2 px-5 shadow-lg hover:scale-105 transition duration-150 ease-in-out"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ProfileChange;
