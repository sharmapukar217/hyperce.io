import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const isWindowDefined = typeof window !== "undefined";

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check if localStorage is available before trying to access it
    if (isWindowDefined) {
      const storedDarkMode = localStorage.getItem("darkMode");
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    }
    return false;
  });

  useEffect(() => {
    if (isWindowDefined) {
      // Update the CSS class immediately when darkMode changes
      document.body.classList.toggle("dark", darkMode);
      
      // Update local storage when darkMode changes
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};