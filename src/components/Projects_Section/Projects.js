import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

// Sample images (replace these with your actual image URLs)
const projectData = [
  {
    title: "Shopify Store",
    subtitle: "Body'N Scents",
    imgUrl: "assets/media/projects/project-bodynscents.png",
  },
  {
    title: "React JS Landing Page",
    subtitle: "NFT Landing Page",
    imgUrl: "assets/media/projects/nft.png",
  },
  {
    title: "Weather App",
    subtitle: "Web Design, App Design",
    imgUrl: "assets/media/projects/weather-app.png",
  },
  {
    title: "Website Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-1.jpg",
  },
  {
    title: "Dashboard Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-2.jpg",
  },
  {
    title: "Portfolio Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-3.jpg",
  },
  {
    title: "App Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-4.jpg",
  },
  {
    title: "App Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-5.jpg",
  },
  {
    title: "App Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-6.jpg",
  },
];

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewOnlyImage, setViewOnlyImage] = useState(false); // Track if only the image should be shown

  const handleClickOpen = (project, showOnlyImage) => {
    setSelectedProject(project);
    setViewOnlyImage(showOnlyImage); // Determine if it's only image or image + description
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ padding: "100px 0px", color: "#fff" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
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
              MY WORK
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
              PROJECTS
            </Typography>
          </Grid>

          {/* Carousel */}
          <Grid item xs={12}>
            <Slider {...settings}>
              {projectData.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    "&:hover .image": {
                      filter: "blur(2px)", // Blur only the image on hover
                    },
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Card
                    sx={{
                      margin: "0 20px",
                      borderRadius: "10px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* CardMedia for image, only this will blur on hover */}
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="300"
                        width="350"
                        className="image"
                        sx={{
                          padding: "20px",
                          borderRadius: "10px",
                          transition: "filter 0.3s ease",
                        }}
                        image={project.imgUrl}
                        alt={project.title}
                        onClick={() => handleClickOpen(project, true)} // Open image only on click
                      />

                      {/* Plus sign overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: 0,
                          transition: "opacity 0.3s",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => handleClickOpen(project, true)}
                        >
                          <AddIcon sx={{ fontSize: "48px", color: "#000" }} />
                        </Box>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        fontWeight="bold"
                      >
                        {project.title}
                      </Typography>

                      {/* Arrow icon for opening modal with image + description */}
                      <IconButton
                        onClick={() => handleClickOpen(project, false)} // Open image and description on click
                        sx={{
                          backgroundColor: "#0085ff",
                          color: "#fff",
                          border: "2px solid #000",
                          "&:hover": {
                            backgroundColor: "#000",
                          },
                        }}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>

        {/* Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative", display: "flex" }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            {selectedProject && (
              <Grid container spacing={2}>
                {/* Image on the left side */}
                <Grid item xs={12} sm={viewOnlyImage ? 12 : 6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", borderRadius: "10px" }}
                    image={selectedProject.imgUrl}
                    alt={selectedProject.title}
                  />
                </Grid>

                {/* Project description on the right side (only show when arrow is clicked) */}
                {!viewOnlyImage && (
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {selectedProject.title}
                      </Typography>
                      <Typography variant="body2" sx={{ marginTop: "10px" }}>
                        {selectedProject.subtitle}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
