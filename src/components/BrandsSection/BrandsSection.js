"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LOGOS } from "../../utils/Data/Data";

const BrandsSection = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    setBrand(LOGOS);
  }, [brand]);

  return (
    <Box
      sx={{
        backgroundColor: "#0788ff1a",
        marginTop: {
          xs: "-23px",
          sm: "-23px",
          md: "-23px",
          lg: "-23px",
          xl: "-120px",
        },
      }}
    >
      <Container>
        <Grid>
          <Grid container spacing={4}>
            {brand?.map((b, index) => (
              <Grid
                container
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "120px",
                  size: { sx: 6, md: 3, lg: 3, xl: 3 },
                }}
              >
                <Box
                  component="img"
                  src={b.logo}
                  alt="Brand Icon"
                  sx={{
                    width: {
                      xs: "150px",
                      md: "200px",
                      lg: "200px",
                      xl: "200px",
                    },
                    height: {
                      xs: "180px",
                      md: "120px",
                      lg: "120px",
                      xl: "120px",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrandsSection;
