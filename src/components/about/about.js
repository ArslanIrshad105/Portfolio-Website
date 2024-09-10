import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import "./about.css"; // Import the CSS file for the animation

const data = [
  {
    count: "280",
    title: "Google Review",
  },
  {
    count: "4",
    title: "Years of Experience",
  },
  {
    count: "50",
    title: "Projects Done",
  },
];

const About = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg,#07233b 1.67%,#041d34 39.95%,#04192d 58.24%,#040e18 80.28%,#050c16 101.48%)",
        padding: "70px 0",
        position: "relative",
      }}
    >
      <Container>
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <img
                style={{
                  position: "relative",
                  zIndex: "1",
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  maxWidth: "400px",
                }}
                alt="Profile Picture"
                src="assets/media/images/about-banner.png"
              />
              {/* SVG Image */}
              <img
                src="assets/media/images/effect-1.svg"
                alt="SVG Effect"
                className="rotating-svg"
              />
            </Box>
          </Grid>
          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              marginTop: { xs: "45px", md: "0" }, // Add margin top on mobile
            }}
          >
            <img
              src="assets/media/images/effect-1.svg"
              alt="SVG Effect"
              className="rotating-top"
              // height={300}
              // width={500}
            />
            <Typography
              variant="overline"
              sx={{
                color: "#fff",
                letterSpacing: "1px",
                backgroundColor: "#0788ff33",
                padding: "5px 12px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontWeight: "bold", marginTop: "16px" }}
            >
              I AM AVAILABLE FOR <br />
              <span style={{ color: "#0085ff" }}>UI</span>{" "}
              <span style={{ color: "#0040ff" }}>UX DESIGN</span> PROJECTS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#8f99b3", marginTop: "16px" }}
            >
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "24px" }}>
              {data.map((val, index) => (
                <Grid item xs={4} key={index}>
                  <Card
                    sx={{
                      backgroundColor: "#ffffff0d",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #ffffff26", // Initial border
                      "&:hover": {
                        borderColor: "#0085ff", // Change border color on hover
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: "#ffffff", fontWeight: "bold" }}
                      >
                        {val.count}+
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#8f99b3",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {val.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0085ff",
                border: "1px solid #0085ff",
                marginTop: "24px",
                borderRadius: "24px",
                padding: "10px 24px",
                textTransform: "none",
                "&:hover": {
                  border: "1px solid #fff",
                  backgroundColor: "#040c16", // Change border color on hover
                },
              }}
            >
              GET IN TOUCH
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
