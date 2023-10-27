import { toast } from "react-toastify";
import { alertCall } from "../toast/alertCall";

const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.BACKEND_URL;
else host_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const base_url = `${host_url}/ring`;

export const fetchRingRandom = async () => {
  const payload = await fetch(`${base_url}/getonerandom`, {
    cache: "no-store",
  }).then((res) => res.json());
  return payload.message;
};

export const fetchRingWithId = async (ringID: string) => {
  const payload = await fetch(`${base_url}/getone/${ringID}`).then((res) =>
    res.json()
  );
  return payload.message;
};

export const fetchRings = async (limit: number, page: number) => {
  const payload = await fetch(
    `${base_url}/files?page=${page}&limit=${limit}`
  ).then((res) => res.json());
  return payload.message.rings;
};

//Uploading with a Button using API
export const uploadRing = async (data: any) => {
  const id = toast.loading("Loading...");
  try {
    const res = await fetch(`${base_url}/upload`, {
      method: "POST",
      credentials: "include",
      body: data,
    });
    const payload = await res.json();
    alertCall(payload, id);
  } catch (error) {
    console.log(error);
  }
};

export const deleteRing = async (fileID: string) => {
  const payload = await fetch(`${base_url}/delete/${fileID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
};
