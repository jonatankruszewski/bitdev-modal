import React, { useContext } from 'react';
import { ContextProvider } from './context-context-provider';
import { ContextContext } from './context-context';

export function MockComponent() {
  const theme = useContext(ContextContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <ContextProvider color="blue">
      <MockComponent />
    </ContextProvider>
  );
};
