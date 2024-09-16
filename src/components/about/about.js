import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./about.css";

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
        padding: "100px 0",
        position: "relative",
      }}
    >
      <Container>
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  zIndex: "1",
                }}
                component="img"
                alt="Profile Picture"
                src="assets/media/images/about-banner-(3).png"
                sx={{
                  width: { xs: "80%", md: "70%", lg: "70%", xl: "80%" },
                  height: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
                }}
              />
              {/* SVG Image */}
              <Box
                component="img"
                src="assets/media/images/effect-1.svg"
                alt="SVG Effect"
                className="rotating-btm"
                sx={{
                  left: { xs: "-60px", md: "-40px", lg: "-40px", xl: "-60px" },
                  bottom: {
                    xs: "-40px",
                    md: "-40px",
                    lg: "-40px",
                    xl: "-40px",
                  },
                }}
              />
            </Box>
          </Grid>
          {/* Text Section */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              marginTop: { xs: "45px", md: "45px", lg: "0px", xl: "0px" },
              marginLeft: { xs: "0px", md: "-40px", lg: "-70px", xl: "0px" },
            }}
          >
            <img
              src="assets/media/images/effect-1.svg"
              alt="SVG Effect"
              className="rotating-top"
            />
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
              ABOUT
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                marginTop: "16px",
                fontSize: "40px",
              }}
            >
              I AM AVAILABLE FOR
              <span style={{ color: "#0085ff" }}> UI UX DESIGN</span> PROJECTS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "20px", marginTop: "30px" }}
            >
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Typography>
            <Box>
              <Grid container spacing={2} sx={{ marginTop: "30px" }}>
                {data.map((val, index) => (
                  <Grid size={{ xs: 4 }} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        padding: "5px",
                        borderRadius: "8px",
                        border: "1px solid #ffffff26",
                        "&:hover": {
                          borderColor: "#0085ff",
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
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#0085ff",
                border: "1px solid #0085ff",
                marginTop: "50px",
                borderRadius: "4px",
                padding: "10px 24px",
                textTransform: "none",
                "&:hover": {
                  border: "1px solid #fff",
                  backgroundColor: "#040c16",
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
