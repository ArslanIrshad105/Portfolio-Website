import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import JavaScriptIcon from "@mui/icons-material/Code"; // Replace with the correct icon
import ReactIcon from "@mui/icons-material/Memory";
import NodeIcon from "@mui/icons-material/Storage";
import TypeScriptIcon from "@mui/icons-material/Code";
import ServiceCard from "./Service_Card/ServiceCard.js";

const service = [
  {
    title: "React.js Development",
    description:
      "Building modern and responsive user interfaces with React.js.",
    IconComponent: ReactIcon,
  },
  {
    title: "JavaScript Development",
    description:
      "Creating dynamic and interactive web applications using JavaScript.",
    IconComponent: JavaScriptIcon,
  },
  {
    title: "Node.js Backend",
    description: "Developing scalable server-side applications using Node.js.",
    IconComponent: NodeIcon,
  },
  {
    title: "TypeScript Development",
    description: "Ensuring robust and maintainable code with TypeScript.",
    IconComponent: TypeScriptIcon,
  },
];

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
            {service.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  IconComponent={item.IconComponent}
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
