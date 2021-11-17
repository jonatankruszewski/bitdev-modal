import React, { ReactNode, useState } from "react";
import { ContextContext } from "./context-context";

export type ContextProviderProps = {
  /**
   * Toggles the modal
   */
  show?: boolean;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function ContextProvider({ children, show }: ContextProviderProps) {
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
    <ContextContext.Provider value={options}>
      {children}
    </ContextContext.Provider>
  );
}
