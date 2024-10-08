"use client";
import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typewriter from "typewriter-effect";
import SocialIcons from "../Social_Icons/SocialIcons";

const MainSection = () => {
  const autotypingString = ["FULL STACK MERN", "WORDPRESS", "SHOPIFY"];

  return (
    <Box
      sx={{
        marginTop: {
          xs: "0px",
          sm: "0px",
          md: "80px",
          lg: "60px",
          xl: "-20px",
        },
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        textAlign: "left",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          {/* Text Section */}
          <Grid size={{ xs: 12, md: 6 }}>
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
              ARSLAN IRSHAD
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "38px", md: "45px" },
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              HAY! I'M ARSLAN
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#0B72EC",
                fontSize: { xs: "38px", md: "45px" },
                fontWeight: "bold",
              }}
            >
              I'M A{" "}
              <Typewriter
                options={{
                  strings: autotypingString,
                  autoStart: true,
                  loop: true,
                }}
              />
              DEVELOPER
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "16px", fontSize: "16px" }}
            >
              Partner with me for your next big leap. It's time to say goodbye
              to any delays. I offer tailored, industry-specific IT consultation
              and software solutions designed to elevate your business.
            </Typography>

            {/* Get in Touch Button */}
            <Box sx={{ marginTop: "30px" }}>
              <Container>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{ display: "flex" }}
                >
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: "#1E90FF",
                        border: "1px solid #1E90FF",
                        marginLeft: { xs: "-20px", sm: "-20px", md: "-25px" },
                        borderRadius: "4px",
                        padding: "10px 24px",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          border: "1px solid #fff",
                          backgroundColor: "#040c16",
                        },
                      }}
                    >
                      GET IN TOUCH
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    {/* Social Icons */}
                    <SocialIcons justifyContent={"left"} marginLeft={"-20px"} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src="assets/media/images/circle-12.png" // replace with actual image
              alt="Jenna Ortega"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainSection;
