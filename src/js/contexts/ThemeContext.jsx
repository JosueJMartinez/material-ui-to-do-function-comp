import React, { createContext, useMemo } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import useToggleState from "../hooks/useToggleState";
import { ThemeProvider } from "@material-ui/styles";

export const ThemeContext = createContext();

export function ThemeProviderCustom(props) {
  const [isDarkMode, toggleIsDarkMode] = useToggleState(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
