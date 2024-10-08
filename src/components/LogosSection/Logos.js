import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { LOGOS } from "@/utils/Data/Data";
import "./logos.css";

const Logos = () => {
  return (
    <Box
      className="logo-animate"
      sx={{
        background: "#0788ff1a",
        padding: "50px",
      }}
    >
      <Container>
        <Stack direction="row" spacing={4} alignItems="center">
          {LOGOS?.map((item, index) => (
            <Stack
              key={index}
              alignItems="center"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <img src={item.icon} className="logos-img" />
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Logos;
