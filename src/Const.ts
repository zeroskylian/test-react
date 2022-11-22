import React from "react";

export interface ThemeContextInterface {
  value: number;
}
export const ThemeContext = React.createContext<ThemeContextInterface>({
  value: 1,
});

ThemeContext.displayName = 'ThemeContext'