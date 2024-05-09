'use client';
import { useContext } from 'react';
import ThemeProvider from './ThemeProvider';
import { ThemeContext } from './ThemeProvider';

export default function DisplayBox(): React.ReactNode {
  let { theme, toggleTheme }: any = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div id="display-box">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p
          className={
            theme === 'light'
              ? 'bg-slate-300 text-black h-[500px] w-[500px]'
              : 'bg-slate-900 text-white h-[500px] w-[500px]'
          }
        >
          {theme} test
        </p>
      </div>
    </ThemeProvider>
  );
}
