"use client"
import React from "react";

import "../../styles/css/fonts.css";

//Material UI
import { ThemeProvider, createTheme } from "@mui/material";

function ThemeProviderMUI({children}) {
  const theme = createTheme({
    typography: {
      fontFamily: "Helvetica",
  },
    palette: {
        primary: {
          main: '#56BDCA',
          contrastText: '#FFFFFF',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 10,
              textTransform: "none",
              fontSize: 18,
            },
          },
        },
      },
    
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderMUI;
