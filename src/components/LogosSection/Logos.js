import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import "./logos.css";

const LOGOS = [
  {
    name: "HTML 5",
    icon: "assets/media/icons/html-5-1.png",
  },
  {
    name: "CSS",
    icon: "assets/media/icons/css.png",
  },
  {
    name: "Tailwind CSS",
    icon: "assets/media/icons/tailwind-css.svg",
  },
  {
    name: "Javascript",
    icon: "assets/media/icons/js.png",
  },
  {
    name: "Typescript",
    icon: "assets/media/icons/typescript.png",
  },
  {
    name: "React JS",
    icon: "assets/media/icons/react_js.svg",
  },
  {
    name: "React Native",
    icon: "assets/media/icons/react_native.svg",
  },
  {
    name: "Next JS",
    icon: "assets/media/icons/next_js.Default",
  },
  {
    name: "Vue JS",
    icon: "assets/media/icons/vue_js.svg",
  },
  {
    name: "Node JS",
    icon: "assets/media/icons/node_js.svg",
  },
  {
    name: "Express JS",
    icon: "assets/media/icons/express-js.png",
  },
  {
    name: "WordPress",
    icon: "assets/media/icons/wordpress.png",
  },
  {
    name: "Shopify",
    icon: "assets/media/icons/shopify.svg",
  },
  {
    name: "Mongo DB",
    icon: "assets/media/icons/mongodb-icon-62.png",
  },
  {
    name: "MySQL",
    icon: "assets/media/icons/mysql.png",
  },
  {
    name: "Postgres",
    icon: "assets/media/icons/postgresql.svg",
  },
  {
    name: "Firebase",
    icon: "assets/media/icons/firebase.svg",
  },
  {
    name: "AWS",
    icon: "assets/media/icons/aws-logo.png",
  },
  {
    name: "Azure",
    icon: "assets/media/icons/azure.svg",
  },
  {
    name: "Digital Ocean",
    icon: "assets/media/icons/digital_ocean.svg",
  },
  {
    name: "Google Cloud",
    icon: "assets/media/icons/google_cloud.svg",
  },
];

const Logos = () => {
  return (
    <Box
      className="animate-marquee"
      sx={{
        background: "#0788ff1a",
        padding: "50px",
        // marginTop: {
        //   xs: "-20px",
        //   sm: "-20px",
        //   md: "-150px",
        //   lg: "-20px",
        //   xl: "-120px",
        // },
      }}
    >
      <Container>
        <Stack direction="row" spacing={4} alignItems="center">
          {LOGOS.map((item, index) => (
            <Stack
              key={index}
              alignItems="center"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <img src={item.icon} className="stack-img" />
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
