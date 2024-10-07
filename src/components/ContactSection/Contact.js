import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SocialIcons from "../Social_Icons/SocialIcons";
import MUITextField from "../MUITextField/MUITextField";
import { useFormik } from "formik";
import { contactFormSchema } from "@/schemas";
import "../ContactSection/style.css";
import { sendEmail } from "@/APIs/APIs";

const serviceId = process.env.NEXT_PUBLIC_SERVIES_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contactFormSchema,

    onSubmit: (values, { resetForm }) => {
      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_name: "Arslan",
          from_firstname: values.firstName,
          from_lastname: values.lastName,
          from_email: values.email,
          from_phonenumber: values.phoneNumber,
          subject: values.subject,
          message: values.message,
        },
      };
      sendEmail(data)
        .then((response) => {
          if (response === "OK") {
            console.log("Email sent successfully");
            resetForm();
          } else {
            console.log("Error", response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  });

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
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              padding: {
                xs: "10px",
                sm: "10px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
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
              <Typography
                variant="body1"
                sx={{ color: "#ffffff", fontSize: "16px" }}
              >
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
                  src="assets/media/images/contact-us-1.png"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />

                <Typography
                  sx={{ color: "#fff", fontWeight: "bold", marginTop: "20px" }}
                >
                  Email Address:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
                >
                  <a href="mailto:arsi.irshad1996@gmail.com">
                    arsi.irshad1996@gmail.com
                  </a>
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold", marginTop: "10px" }}
                >
                  Phone Number:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
                >
                  <a href="tel:+9203070949488">+923070949488</a>
                </Typography>
                <SocialIcons justifyContent={"center"} marginTop={"16px"} />
              </Box>
            </Grid>

            {/* Right Section - Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ padding: "20px" }}>
                {/* <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      // slotProps.htmlInput={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80",
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
                      label="Last Name"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80",
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
                            borderColor: "#ffffff80",
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
                      label="Contact Number"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#ffffff80" } }}
                      sx={{
                        backgroundColor: "#ffffff0d",
                        color: "#fff",
                        borderRadius: "5px",
                        border: isFocused ? "" : "1px solid #ffffff26",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#ffffff80",
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
                            borderColor: "#ffffff80",
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
                            borderColor: "#ffffff80",
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
                        backgroundColor: "#1E90FF",
                        color: "#fff",
                        padding: "10px 0",
                        borderRadius: "5px",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid> */}
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                      <MUITextField
                        name="firstName"
                        label="First Name*"
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                      <MUITextField
                        name="lastName"
                        label="Last Name*"
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                      <MUITextField
                        name="email"
                        label="Email*"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                      <MUITextField
                        name="phoneNumber"
                        label="Phone Number"
                        type="text"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <MUITextField
                        name="subject"
                        label="What are you seeking?*"
                        type="text"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.subject &&
                          Boolean(formik.errors.subject)
                        }
                        helperText={
                          formik.touched.subject && formik.errors.subject
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <MUITextField
                        multiline
                        rows={4}
                        name="message"
                        label="Please drop your message.*"
                        type="text"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.message &&
                          Boolean(formik.errors.message)
                        }
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{
                          backgroundColor: "#1E90FF",
                          color: "#fff",
                          padding: "10px 0",
                          borderRadius: "5px",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
