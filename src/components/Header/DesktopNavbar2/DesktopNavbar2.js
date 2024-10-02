import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DesktopNavbar = () => {
  const theme = useTheme();
  const [navbarBg, setNavbarBg] = useState("transparent"); // State for background color
  const [activeSection, setActiveSection] = useState("#home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg("#040c16"); // Change to black when scrolling past 50px
    } else {
      setNavbarBg("transparent"); // Transparent background when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section when clicking a link
  const handleMenuClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId.slice(1)); // Remove "#" to get ID
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId); // Update active section on click
    }
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(handleObserver, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: navbarBg, // Background color controlled by scroll
          padding: "20px 20px",
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
          width: "100%",
          transition: "all 0.35s ease", // Smooth transition effect
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <>
            {/* Logo Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/">
                <Box
                  component="img"
                  src="assets/media/images/logo-light.svg"
                  alt="Logo"
                  sx={{ height: 40, marginRight: 2 }}
                />
              </Link>
            </Box>
            {/* Menu Section */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Link
                onClick={(e) => handleMenuClick(e, "#home")}
                sx={{ color: "white", textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    borderBottom:
                      activeSection === "#home" ? "2px solid white" : "none",
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  HOME
                </Typography>
              </Link>
              <Link
                onClick={(e) => handleMenuClick(e, "#about")}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  borderBottom:
                    activeSection === "#about" ? "2px solid white" : "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography variant="body1">ABOUT ME</Typography>
              </Link>
              <Link
                onClick={(e) => handleMenuClick(e, "#projects")}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  borderBottom:
                    activeSection === "#projects" ? "2px solid white" : "none",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Typography variant="body1">PROJECTS</Typography>
              </Link>
              <Link
                onClick={(e) => handleMenuClick(e, "#skills")}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  borderBottom:
                    activeSection === "#skills" ? "2px solid white" : "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography variant="body1">SKILLS</Typography>
              </Link>
              <Link
                onClick={(e) => handleMenuClick(e, "#contact")}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  borderBottom:
                    activeSection === "#contact" ? "2px solid white" : "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography variant="body1">CONTACT</Typography>
              </Link>
            </Box>
          </>

          {/* Let's Talk Button for Desktop */}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1E90FF",
              border: "1px solid #1E90FF",
              color: "white",
              padding: "10px 20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#040c16",
                border: "1px solid white",
              },
            }}
          >
            LET'S TALK
          </Button>
        </Toolbar>
      </AppBar>

      {/* Add sections with refs for IntersectionObserver */}
      <Box
        id="home"
        ref={sectionRefs.home}
        sx={{ height: "100vh", backgroundColor: "lightblue" }}
      >
        <Typography variant="h2">Home Section</Typography>
      </Box>
      <Box
        id="about"
        ref={sectionRefs.about}
        sx={{ height: "100vh", backgroundColor: "lightgreen" }}
      >
        <Typography variant="h2">About Me Section</Typography>
      </Box>
      <Box
        id="projects"
        ref={sectionRefs.projects}
        sx={{ height: "100vh", backgroundColor: "lightcoral" }}
      >
        <Typography variant="h2">Projects Section</Typography>
      </Box>
      <Box
        id="skills"
        ref={sectionRefs.skills}
        sx={{ height: "100vh", backgroundColor: "lightgoldenrodyellow" }}
      >
        <Typography variant="h2">Skills Section</Typography>
      </Box>
      <Box
        id="contact"
        ref={sectionRefs.contact}
        sx={{ height: "100vh", backgroundColor: "lightpink" }}
      >
        <Typography variant="h2">Contact Section</Typography>
      </Box>
    </>
  );
};

export default DesktopNavbar;
