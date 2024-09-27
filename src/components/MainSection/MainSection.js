"use client";
import React from "react";
import { Box, Button, Typography, Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typewriter from "typewriter-effect";

const MainSection = () => {
  const autotypingString = ["SHOPIFY DEVELOPER"];
  // const autotypingString = [
  //   "FULL STACK MERN DEVELOPER",
  //   "WORDPRESS DEVELOPER",
  //   "SHOPIFY DEVELOPER",
  // ];

  return (
    <Box
      sx={{
        marginTop: {
          xs: "40px",
          sm: "40px",
          md: "40px",
          lg: "50px",
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
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              HAY! I'M JENNA
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#0B72EC",
                fontSize: "50px",
                fontWeight: "bold",
                mb: 2,
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
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: "20px" }}>
              Partner with me for your next big leap. It's time to say goodbye
              to any delays. I offer tailored, industry-specific IT consultation
              and software solutions designed to elevate your business.
            </Typography>

            {/* Get in Touch Button */}
            <Box>
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
                        backgroundColor: "#0085ff",
                        border: "1px solid #0085ff",
                        marginTop: "50px",
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
                    <Box sx={{ display: "flex", gap: 1, mt: 6 }}>
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
              src="assets/media/images/circle-1.avif" // replace with actual image
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
