"use client";
import React from "react";
import { useForm } from "react-hook-form";
const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const input = "flex flex-col my-1";

function ResetPassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch(`${hostname}/auth/forgot-password-ini`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
      }),
    });
    await res.json();
  };

  return (
    <main className="flex w-screen justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md h-[50%] w-[25%]">
        <div className="p-4 flex flex-col h-full">
          <h1 className="font-bold text-5xl text-gray-400 text-center mb-3">
            RingoTunes
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className={input}>
              <label className="text-lg">Username</label>
              <input
                {...register("username", { required: true })}
                className="py-2 px-1 bg-gray-100"
                type="text"
              />
            </div>
            <div className={input}>
              <label className="text-lg">Email</label>
              <input
                {...register("email", { required: true })}
                className="py-2 px-1 bg-gray-100"
                type="email"
              />
            </div>
            <button
              className="bg-[rgb(1,117,211)] py-3 text-white rounded-md hover:bg-[rgba(1,116,211,0.74)] mt-6"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ResetPassword;
