import React, { createContext, useMemo, useState } from "react";
import theme from "../styles/theme";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const value = useMemo(() => ({
    darkMode,
    toggleTheme: () => setDarkMode(mode => !mode),
    theme
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;