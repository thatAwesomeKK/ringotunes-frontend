"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const input = "flex flex-col my-1";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    if (data.password !== data.CnPassword) {
      return console.log("Password and Confirm Password not Equal");
    }
    const res = await fetch(`${hostname}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });
    const user = await res.json();
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
            <div className={input}>
              <label className="text-lg">Password</label>
              <input
                {...register("password", { required: true })}
                className="py-2 px-1 bg-gray-100"
                type="password"
              />
            </div>
            <div className={input}>
              <label className="text-lg">Confirm Password</label>
              <input
                {...register("CnPassword", { required: true })}
                className="py-2 px-1 bg-gray-100"
                type="password"
              />
            </div>
            <button
              className="bg-[rgb(1,117,211)] py-3 text-white rounded-md hover:bg-[rgba(1,116,211,0.74)] mt-6"
              type="submit"
            >
              Sign Up
            </button>
            <Link href={"/auth/login"}>
              <p className="cursor-pointer text-cyan-500">
                Already a user? Sign In
              </p>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
