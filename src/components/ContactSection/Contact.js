import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LinkedIn, WhatsApp, GitHub } from "@mui/icons-material";

const ContactForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: {
          xs: "20px",
          sm: "20px",
          md: "50px",
          lg: "100px",
          xl: "50px",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0788ff1a",
          border: "1px solid #0788ff33",
          padding: "20px",
          borderRadius: "4px 4px 0px 0px",
          // display: "flex",
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              // backgroundColor: "#000",
              // border: "1px solid #0788ff33",
              padding: {
                xs: "10px",
                sm: "10px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
              borderRadius: "10px",
              // display: "flex",
              // justifyContent: "center",
              // width: "100%",
            }}
          >
            <Box
              sx={{
                // display: "flex",
                textAlign: { xs: "left", md: "left" },
                marginLeft: {
                  xs: "0",
                  sm: "0",
                  md: "400px",
                  lg: "400px",
                  xl: "400px",
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Let’s Discuss Your Project
              </Typography>
              <Typography sx={{ color: "#a1a1a1" }}>
                Always available for freelancing if the right project comes
                along.
                <br />
                Feel free to contact me.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#0788ff30",
          border: "1px solid #0788ff33",
          padding: "20px",
          borderRadius: "0px 0px 4px 4px",
          display: "flex",
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {/*Image and Contact form */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  marginTop: { sx: "-240px", md: "-240px", lg: "-210px" },
                }}
              >
                <img
                  src="assets/media/images/about-banner-(3).png" // Replace with the actual image URL
                  alt="Profile"
                  style={{
                    width: "300px",
                    height: "350px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />

                <Typography sx={{ color: "#fff", marginTop: "20px" }}>
                  Email Address:
                </Typography>
                <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                  <a href="mailto:arsi.irshad1996@gmail.com">
                    arsi.irshad1996@gmail.com
                  </a>
                </Typography>
                <Typography sx={{ color: "#fff", marginTop: "10px" }}>
                  Phone Number:
                </Typography>
                <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                  <a href="tel:+9203070949488">+923070949488</a>
                </Typography>

                <Box
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 5,
                  }}
                >
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
              </Box>
            </Grid>

            {/* Right Section - Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ padding: "20px" }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80", // Hover border color
                          },
                        },
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80", // Hover border color
                          },
                        },
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80", // Hover border color
                          },
                        },
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80", // Hover border color
                          },
                        },
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#2196F3",
                        color: "#fff",
                        padding: "10px 0",
                        borderRadius: "5px",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
