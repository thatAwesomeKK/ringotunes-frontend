import { CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";
import { alertCall } from "../toast/alertCall";

const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.BACKEND_URL;
else host_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const base_url = `${host_url}/auth`;

export const signIn = async (data: any) => {
  const id = toast.loading("Signing in...");
  const payload = await fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then((res) => res.json());
  alertCall(payload, id);
  timeOut(1000);
  return payload.accessToken;
};

export const GoogleLoginSuccess = async (data: CredentialResponse) => {
  const id = toast.loading("Signing in...");
  const payload = await fetch(`${base_url}/google-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ googleToken: data?.credential }),
  }).then((res) => res.json());
  alertCall(payload, id);
  timeOut(1000);
};

export const signUp = async (data: any) => {
  const id = toast.loading("Signing in...");
  const payload = await fetch(`${base_url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
  }).then((res) => res.json());
  alertCall(payload, id);
  timeOut(1000);
};

export const refreshAccessToken = async (refreshToken: string) => {
  const payload = await fetch(`${base_url}/refresh`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      refreshToken: refreshToken,
    },
  }).then((res) => res.json());
  return payload.accessToken;
};

export const updateUser = async (token: string, profileImg: any, data: any) => {
  const id = toast.loading("Updating profile...");
  const payload = await fetch(`${base_url}/update`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      accessToken: token,
    },
    body: JSON.stringify({
      pfp: profileImg,
      username: data.username,
    }),
  }).then((res) => res.json());
  alertCall(payload, id);
};

export const handleLogout = async (token: string) => {
  const id = toast.loading("Signing in...");
  const payload = await fetch(`${base_url}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accessToken: token,
    },
    credentials: "include",
  }).then((res) => res.json());
  alertCall(payload, id);
  timeOut(1000);
};

const timeOut = (timer: number) => {
  setTimeout(() => {
    window.location.reload();
  }, timer);
};
