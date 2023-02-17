import React from "react";
import Form from "./Form";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

const checkVerify = async (resetToken: string) => {
  const res = await fetch(
    `${hostname}/auth/forgot-password-verify?token=${resetToken}`
  );
  const payload = await res.json();
  return payload;
};

type PageProps = {
  params: {
    resetToken: string;
  };
};

async function ResetPassword({ params: { resetToken } }: PageProps) {
  const verify = await checkVerify(resetToken);

  return (
    <>
      <h1>{verify.success ? verify.message : verify.error}</h1>
      {verify.success && <Form tempToken={verify.tempToken} />}
    </>
  );
}

export default ResetPassword;
