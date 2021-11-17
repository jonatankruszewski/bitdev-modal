import React, { ReactNode, useState } from "react";
import { ModalContext } from "./modal-context";

export type ModalContextProviderProps = {
  children: ReactNode;
  show?: boolean;
};

export function ModalContextProvider({
  children,
  show = false,
}: ModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(show);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const options = {
    closeModal: closeModal,
    openModal: openModal,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  if (!isOpen) return null;
  return (
    <ModalContext.Provider value={{ ...options }}>
      {children}
    </ModalContext.Provider>
  );
}
