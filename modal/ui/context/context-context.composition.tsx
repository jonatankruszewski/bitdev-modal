import React from "react";
import { ContextProvider } from "./context-context-provider";
import { ContextContext } from "./context-context";

export const BasicThemeUsage = () => {
  return (
    <ContextProvider>
      <ContextContext.Consumer>
        {({ isOpen }) => (
          <div>The current value of isOpen is: {JSON.stringify(isOpen)}</div>
        )}
      </ContextContext.Consumer>{" "}
    </ContextProvider>
  );
};
