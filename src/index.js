import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "EB Garamond,Roboto, Arial, sans-serif",
  },  
  palette: {
    primary: { main: "#F2F0EF" }, // blue site background
    secondary: { main: "#1d1f53" }, // light gray header/cards
    background: {
      default: "#000000", // entire site background blue 1d1f53
      paper: "#C9C8C7",   // Paper, Card,
      header: "#1d1f53",// header background
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff", // for white nav text
    },
  },
  
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
