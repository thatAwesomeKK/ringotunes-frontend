"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface ContextProps {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

export const SideBarContext = createContext<ContextProps>({ isOpen: false, setIsOpen: (): Boolean => true });

export const SideBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => useContext(SideBarContext);
