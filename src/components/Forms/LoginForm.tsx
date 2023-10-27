"use client";
import { signIn } from "@/lib/apiCalls/auth";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    await signIn(data)
    setLoading(false);
  };

  return (
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
      <Link href={"/signup"} className="cursor-pointer text-cyan-500">
        New User? Sign Up
      </Link>
      <Link
        href={"/profile/reset-password"}
        className="cursor-pointer text-cyan-500"
      >
        Forgot Password?
      </Link>
    </form>
  );
}

export default LoginForm;
