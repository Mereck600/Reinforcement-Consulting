import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Material UI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f5f5f5" },
    background: { default: "#ffffff" },
    white: { main: "#ffffff" } // <-- add white palette
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif"
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
