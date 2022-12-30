"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const res = await fetch(`${hostname}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const user = await res.json();
    setLoading(false);
  };

  return (
    <main className="flex w-screen justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md h-[50%] w-[25%]">
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-5xl text-gray-400 text-center">
              RingoTunes
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="text-lg">Email</label>
            <input
              {...register("email", { required: true })}
              className="py-2 px-1 bg-gray-100"
              type="email"
            />
            <label className="text-lg">Password</label>
            <input
              {...register("password", { required: true })}
              className="py-2 px-1 bg-gray-100"
              type="password"
            />
            <button
              className="bg-[rgb(1,117,211)] py-3 text-white rounded-md hover:bg-[rgba(1,116,211,0.74)] mt-4 disabled:bg-[rgba(1,116,211,0.56)]"
              type="submit"
              disabled={loading}
            >
              Sign In
            </button>
            <Link href={"/auth/register"}>
              <p className="cursor-pointer text-cyan-500">New User? Sign Up</p>
            </Link>
          </form>
          <div className="flex items-center justify-center relative">
            <hr className="w-full text-black" />
            <div className="absolute border rounded-full w-fit text-center bg-white p-2">
              OR
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            {/* <ProviderButton
              key={1}
              Icon={AiOutlineGoogle}
              Provider={"Google"}
              bgColor={"bg-[#D84B37]"}
              ProviderAction={signInWithGoogle}
            />
            <ProviderButton
              key={2}
              Icon={GrFacebookOption}
              Provider={"Facebook"}
              bgColor={"bg-[#3b5998]"}
              ProviderAction={signInWithGoogle}
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
