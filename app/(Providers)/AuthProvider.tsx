import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { storeToken } from "../../util/redux/slices/tokenSlice";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const refresh = async () => {
      const res = await fetch(`${hostname}/auth/refresh`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = await res.json();
      dispatch(storeToken(token.accessToken));
      setLoading(false)
    };
    refresh();
  }, []);
  if(loading){
    return <>Loading....</>;
  }
  return <>{children}</>;
};

export default AuthProvider;
