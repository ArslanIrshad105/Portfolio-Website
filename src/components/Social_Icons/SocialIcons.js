"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";

const SocialIcons = ({ justifyContent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { justifyContent },
        gap: 1,
        mt: 6,
      }}
    >
      <a
        href="mailto:arsi.irshad1996@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          sx={{
            backgroundColor: "#fff",
            color: "white",
            border: "1px solid #fff",
            "&:hover": {
              backgroundColor: "#fff",
              border: "2px solid #fff",
            },
          }}
        >
          <Box
            component="img"
            src="assets/media/icons/new.png"
            height="24px"
            width="24px"
          />
        </IconButton>
      </a>
      <a
        href="https://wa.me/03070949488"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            border: "1px solid #fff",
            "&:hover": {
              backgroundColor: "#25D366",
              border: "2px solid #fff",
            },
          }}
        >
          <WhatsApp />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/arslan-irshad-software-engineer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          sx={{
            backgroundColor: "#0072B1",
            color: "white",
            border: "1px solid #fff",
            "&:hover": {
              backgroundColor: "#0072B1",
              border: "2px solid #fff",
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </a>
      <a
        href="https://github.com/ArslanIrshad105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton
          sx={{
            backgroundColor: "#000",
            color: "white",
            border: "1px solid #fff",
            "&:hover": {
              backgroundColor: "#000",
              border: "2px solid #fff",
            },
          }}
        >
          <GitHub />
        </IconButton>
      </a>
    </Box>
  );
};

export default SocialIcons;
