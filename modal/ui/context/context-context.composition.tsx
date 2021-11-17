import React, { useContext } from "react";
import { ContextProvider } from "./context-context-provider";
import { ContextContext } from "./context-context";

export function MockComponent() {
  const modalContext = useContext(ContextContext);
  return <div>The current value of isOpen is: {modalContext.isOpen}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <ContextProvider show={true}>
      <MockComponent />
    </ContextProvider>
  );
};
