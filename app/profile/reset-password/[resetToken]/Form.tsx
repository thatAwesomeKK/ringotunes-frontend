"use client";
import React from "react";
import { useForm } from "react-hook-form";

const input = "flex flex-col my-1";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

type Props = {
  tempToken: string;
};

function Form({ tempToken }: Props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    if (data.password !== data.CnPassword) {
      return console.log("Password and Confirm Password not Equal");
    }
    const res = await fetch(
      `${hostname}/auth/forgot-password-change?token=${tempToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: data.password,
        }),
      }
    );
    const payload = await res.json();
    console.log(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        Submit
      </button>
    </form>
  );
}

export default Form;
