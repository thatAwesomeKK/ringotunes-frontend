"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

type ContextProps = {
  token: string;
};

export const AuthContext = createContext<ContextProps>({ token: "1234" });

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>("");
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
      setToken(token.accessToken);
    };
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
