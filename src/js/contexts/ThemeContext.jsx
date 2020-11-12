import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleIsDarkMode] = useToggleState(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
