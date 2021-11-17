import { createContext } from "react";

export type ContextContextType = {
  closeModal?: Function;
  isOpen?: boolean;
  setIsOpen?: Function;
};

export const ContextContext = createContext<ContextContextType>({});
