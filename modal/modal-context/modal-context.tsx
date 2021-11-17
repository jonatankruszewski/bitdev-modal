import { createContext } from "react";

export type ModalContextType = {
  closeModal?: Function;
  openModal?: Function;
  isOpen: boolean;
  setIsOpen?: Function;
};

export const ModalContext = createContext<ModalContextType>({ isOpen: false });
