import React from "react";
import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["700"],
});

type PageProps = {
  params: {
    verifyToken: string;
  };
};

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const checkVerify = async (verifyToken: string) => {
  const res = await fetch(`${hostname}/auth/verify-email?token=${verifyToken}`);
  const payload = await res.json();
  return payload;
};

async function VerifyEmail({ params: { verifyToken } }: PageProps) {
  const verify = await checkVerify(verifyToken);
  // const verify = {
  //   message: "Testing",
  // };
  return (
    <main className="flex justify-center items-center h-[90vh]">
      <div className="bg-gray-100 p-10 rounded-md shadow-md flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl text-gray-400">RingoTunes</h1>
        <p
          className={`${rowdies.className} text-5xl mt-5  ${
            verify?.message ? "text-green-400" : "text-rose-400"
          }`}
        >
          {verify.message || verify.error}
        </p>
      </div>
    </main>
  );
}

export default VerifyEmail;
