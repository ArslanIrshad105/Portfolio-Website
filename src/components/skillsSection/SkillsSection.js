import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";

const skillsData = [
  {
    name: "HTML 5",
    percentage: 95,
    icon: "assets/media/icons/html5.svg",
  },
  {
    name: "CSS",
    percentage: 83,
    icon: "assets/media/icons/css.png",
  }, // Replace with appropriate icon
  {
    name: "Javascript",
    percentage: 93,
    icon: "assets/media/icons/javascript.svg",
  },
  {
    name: "React JS",
    percentage: 84,
    icon: "assets/media/icons/react_js.svg",
  },
  {
    name: "Next JS",
    percentage: 65,
    icon: "assets/media/icons/next_js.Default",
  },
  {
    name: "Vue JS",
    percentage: 86,
    icon: "assets/media/icons/vue_js.svg",
  },
  {
    name: "Node JS",
    percentage: 62,
    icon: "assets/media/icons/node.svg",
  },
  {
    name: "Express JS",
    percentage: 94,
    icon: "assets/media/icons/express-js.png",
  },
  {
    name: "WordPress",
    percentage: 94,
    icon: "assets/media/icons/wordpress.png",
  },
  {
    name: "Shopify",
    percentage: 94,
    icon: "assets/media/icons/shopify.svg",
  },
  {
    name: "Mongo DB",
    percentage: 94,
    icon: "assets/media/icons/mongodb-icon-62.png",
  },
  {
    name: "Postgres",
    percentage: 94,
    icon: "assets/media/icons/postgresql.svg",
  },
  {
    name: "MySQL",
    percentage: 94,
    icon: "assets/media/icons/mysql.svg",
  },
  {
    name: "Firebase",
    percentage: 94,
    icon: "assets/media/icons/firebase.svg",
  },
  {
    name: "AWS",
    percentage: 94,
    icon: "assets/media/icons/aws.svg",
  },
  {
    name: "Azure",
    percentage: 94,
    icon: "assets/media/icons/azure.svg",
  },
  {
    name: "Digital Ocean",
    percentage: 94,
    icon: "assets/media/icons/digital_ocean.svg",
  },
  {
    name: "Google Cloud",
    percentage: 94,
    icon: "assets/media/icons/google_cloud.svg",
  },
  {
    name: "Scripy",
    percentage: 94,
    icon: "assets/media/icons/scripy.jpg",
  },
];

const SkillsSection = () => {
  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Text Section */}
        <Grid item xs={12} md={5}>
          <Typography
            color="#ffffffa6"
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            My Skills
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Let's Explore Popular <br />
            <Typography component="span" color="#c9f31d" variant="h3">
              Skills & Experience
            </Typography>
          </Typography>
          <Typography variant="body1" color="#fff" sx={{ mb: 4 }}>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c9f31d",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
        </Grid>

        {/* Skills Cards */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {skillsData.map((skill, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#1f1f1f",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "20px",
                    border: "2px solid #ffffff1a", // Initial border
                    "&:hover": {
                      borderColor: "#c9f31d", // Change border color on hover
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* <Avatar sx={{ backgroundColor: "transparent", mb: 1 }}>
                      {skill.icon}
                    </Avatar> */}
                    <img src={skill.icon} height={55} width={55} />
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {skill.name}
                    </Typography>
                    <Box sx={{ width: "100%", mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.percentage}
                        sx={{
                          backgroundColor: "#555",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "limegreen",
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {skill.percentage}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
