import { createContext, useState, useContext } from "react";

const DarkThemeContext = createContext();

export const useTheme = () => {
  return useContext(DarkThemeContext);
};

export const ThemeContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <DarkThemeContext.Provider value={{ dark, toggleTheme: handleToggle }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
