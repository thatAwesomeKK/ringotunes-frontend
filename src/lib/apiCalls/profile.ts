import { toast } from "react-toastify";
import { alertCall } from "../toast/alertCall";

const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.BACKEND_URL;
else host_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const base_url = `${host_url}/user`;

export const getPfp = async (accessToken: string) => {
  const res = await fetch(`${base_url}/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    credentials: "include",
  });
  const payload = await res.json();
  return payload.message;
};

export const fetchUserLikedRings = async (accessToken: string) => {
  const payload = await fetch(`${base_url}/myliked`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
  return payload.message;
};

export const fetchUserDownloadedRings = async (accessToken: string) => {
  const payload = await fetch(`${base_url}/mydownloads`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
  return payload.message;
};

export const fetchUserDashboard = async (accessToken: string) => {
  const payload = await fetch(`${base_url}/dash`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
  return payload.message;
};

export const fetchUserInfo = async (userID: string) => {
  const userInfo = await fetch(`${base_url}/profile/${userID}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return userInfo;
};

export const handleLike = async (docId: string) => {
  const payload = await fetch(`${base_url}/handle-like`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ docId }),
  }).then((res) => res.json());
  return payload.message;
};

export const downloadRing = async (docId: string) => {
  const id = toast.loading("Downloading...");
  const payload = await fetch(`${base_url}/handle-download`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ docId }),
  }).then((res) => res.json());
  alertCall(payload, id);
  return payload.success;
};

export const checkLike = async (accessToken: string, docId: string) => {
  const payload = await fetch(`${base_url}/check-like`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify({ docId }),
  }).then((res) => res.json());
  return payload.success;
};
