import React, { useContext } from "react";
import { ModalContextProvider } from "./modal-context-provider";
import { ModalContext } from "./modal-context";

export function MockComponent() {
  const theme = useContext(ModalContext);
  return <div>this should be {theme.isOpen} </div>;
}

export const BasicThemeUsage = () => {
  return (
    <ModalContextProvider show={false}>
      <MockComponent />
    </ModalContextProvider>
  );
};
