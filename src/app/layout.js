"use client";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline ensures consistent styling */}
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
