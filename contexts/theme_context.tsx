import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

// Define a context for dark mode
interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children
}) => {
  // Check if we are in a browser environment
  const isBrowser = typeof window !== 'undefined';

  // Initialize dark mode state with a default value or from local storage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (isBrowser) {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : true;
    }
    return false;
  });

  // Apply the dark mode class when the component mounts
  useEffect(() => {
    if (isBrowser) {
      document.body.classList.toggle('dark', darkMode);
    }
  }, [darkMode, isBrowser]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (isBrowser) {
        localStorage.setItem('darkMode', JSON.stringify(newMode));
      }
      return newMode;
    });
  };

  // Remove the dark mode class when the component unmounts
  useEffect(() => {
    return () => {
      if (isBrowser) {
        document.body.classList.remove('dark');
      }
    };
  }, [isBrowser]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
