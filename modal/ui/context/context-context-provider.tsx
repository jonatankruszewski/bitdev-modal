import React, { ReactNode, useState, useEffect } from "react";
import { ContextContext } from "./context-context";

export type ContextProviderProps = {
  /**
   * Toggles the modal
   */
  show?: boolean;
  /**
   * children to be rendered within this context.
   */
  children: ReactNode;
};

export function ContextProvider({
  children,
  show = false,
}: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(show);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <ContextContext.Provider
      value={{
        closeModal: closeModal,
        openModal: openModal,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
      }}>
      {children}
    </ContextContext.Provider>
  );
}
