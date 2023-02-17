"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { alertCall } from "../../../util/toast/alertCall";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const input = "flex flex-col my-1";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const id = toast.loading("Registering....");
    setLoading(true);

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
    const payload = await res.json();
    if (payload.message) {
      alertCall("update_success", payload.message, id);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } else {
      alertCall("update_error", payload.error, id);
    }
    setLoading(false);
  };

  return (
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
        className="bg-[rgb(1,117,211)] py-3 text-white rounded-md hover:bg-[rgba(1,116,211,0.74)] mt-6 disabled:bg-[rgba(1,116,211,0.56)]"
        type="submit"
        disabled={loading}
      >
        Sign Up
      </button>
      <Link href={"/auth/login"}>
        <p className="cursor-pointer text-cyan-500">Already a user? Sign In</p>
      </Link>
    </form>
  );
}

export default RegisterForm;
