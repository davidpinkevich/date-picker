import React, { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "styles/GlobalStyles";
import { Theme } from "styles/Theme";

const ThemeContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { ThemeContainer };
