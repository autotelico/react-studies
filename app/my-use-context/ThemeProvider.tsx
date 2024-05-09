'use client';
import { createContext, useContext, useState } from 'react';
import DisplayBox from './DisplayBox';

export type Theme =
  | {
      theme: string;
      toggleTheme: () => void;
    }
  | undefined;

export const ThemeContext = createContext<Theme>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
