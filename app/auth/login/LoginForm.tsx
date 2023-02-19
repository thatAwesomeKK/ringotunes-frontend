"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { alert } from "../../../util/toast/alertCall";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const id = toast.loading("Logging In...");

    const res = await fetch(`${hostname}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    const payload = await res.json();

    const alertRes = alert(payload, id);
    if (alertRes) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
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
      <Link href={"/auth/register"} className="cursor-pointer text-cyan-500">
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
