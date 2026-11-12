import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;
