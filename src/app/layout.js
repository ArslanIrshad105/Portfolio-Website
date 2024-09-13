"use client";
import { Space_Grotesk } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily:
      "Space Grotesk, var(--font-geist-sans), var(--font-geist-mono), sans-serif",
    // "Space Grotesk, var(--font-geist-sans), var(--font-geist-mono), sans-serif",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={spaceGrotesk.className}
        style={{
          margin: "0px",
          background:
            "linear-gradient(90deg,#07233b 1.67%,#041d34 39.95%,#04192d 58.24%,#040e18 80.28%,#050c16 101.48%)",
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
