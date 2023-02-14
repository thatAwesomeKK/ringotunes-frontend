"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

export const DropDownContext = createContext<ContextProps>({
  isOpen: false,
  setIsOpen: (): Boolean => true,
});

export const DropDownContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropDownContext.Provider>
  );
};

export const useDropDownContext = () => useContext(DropDownContext);
