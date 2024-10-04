import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          borderTop: "1px solid #ffffff1a",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              padding: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "20px",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ color: "#ffffffbf" }}>
                © All Rights Reserved By Arslan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
