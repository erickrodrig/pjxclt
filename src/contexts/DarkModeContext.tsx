import React, { createContext, useContext, useEffect, useState } from 'react';

type DarkModeProviderProps = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

const getInitialMode = () => {
  let storedPreference: string | null = null;
  try {
    storedPreference = localStorage.getItem('darkMode');
  } catch (error) {
    console.error("Error accessing or parsing web storage:", error);
  }
  return storedPreference !== null ? JSON.parse(storedPreference) : false;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
