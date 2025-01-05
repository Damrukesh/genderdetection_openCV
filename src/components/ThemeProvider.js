import React from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5865F2", // Discord-like purple
    },
    secondary: {
      main: "#23272A", // Dark gray for sidebar
    },
    background: {
      default: "#2C2F33", // Main background
      paper: "#23272A", // Sidebar background
    },
    text: {
      primary: "#FFFFFF", // Main text color
      secondary: "#B9BBBE", // Subtle text color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h6: {
      fontWeight: 600,
    },
    body1: {
      color: "#FFFFFF",
    },
    body2: {
      color: "#B9BBBE",
    },
  },
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
