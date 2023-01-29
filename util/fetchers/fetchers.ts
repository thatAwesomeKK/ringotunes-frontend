const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchUserRings = async (token: string, fetchKey: string) => {
  const res = await fetch(`${hostname}${fetchKey}`, {
    headers: { accessToken: token },
  });
  const rings = await res.json();
  return rings;
};

export const getPfp = async (token: string) => {
  const res = await fetch(`${hostname}/user/info`, {
    headers: { accessToken: token },
  });
  const payload = await res.json();
  return payload.message.pfp;
};
