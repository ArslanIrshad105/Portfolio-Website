import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ServiceCard from "./Service_Card/ServiceCard.js";
import { SERVICES } from "@/utils/Data/Data.js";

const Services = () => {
  return (
    <Box sx={{ padding: "100px 0px", backgroundColor: "#0788ff1a" }}>
      <Container>
        <Grid container spacing={2}>
          {/* Text Section */}
          <Grid>
            <Typography
              variant="overline"
              sx={{
                color: "#fff",
                letterSpacing: "1px",
                backgroundColor: "#0788ff33",
                padding: "12px 16px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              SERVICES
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
                fontSize: "40px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              <span style={{ color: "#0085ff" }}>SERVICES</span> I AM PROVIDING
            </Typography>
          </Grid>
          {/* Service Section */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ marginTop: "20px" }}
          >
            {SERVICES?.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 12, md: 6 }}>
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  altText={item.altText}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
