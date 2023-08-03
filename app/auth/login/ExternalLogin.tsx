'use client'
import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

function ExternalLogin() {

  //OnSuccess Google Login
  const GoogleLoginSuccess = async (data: CredentialResponse) => {
    const res = await fetch(`${hostname}/auth/google-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ googleToken: data?.credential }),
    });
    await res.json();
    window.location.reload()
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          await GoogleLoginSuccess(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        size="large"
        text="signin_with"
      />
    </div>
  );
}

export default ExternalLogin;
