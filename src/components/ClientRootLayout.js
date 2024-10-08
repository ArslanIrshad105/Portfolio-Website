"use client";

import { Space_Grotesk } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../app/globals.css";

// Space Grotesk from Google Fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--my-font",
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--my-font)", // Set Space Grotesk as the default font
  },
});

export default function ClientRootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline ensures consistent styling */}
      <CssBaseline />
      <div className={spaceGrotesk.variable}>{children}</div>
    </ThemeProvider>
  );
}
