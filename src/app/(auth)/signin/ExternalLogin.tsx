'use client'
import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { GoogleLoginSuccess } from "@/lib/apiCalls/auth";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

function ExternalLogin() {

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