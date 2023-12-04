"use client"
import React from "react";

//Material UI
import { ThemeProvider, createTheme } from "@mui/material";

function ThemeProviderMUI({children}) {
  const theme = createTheme({
    palette: {
        primary: {
          main: '#56BDCA',
          contrastText: '#FFFFFF',
        },
      },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderMUI;
