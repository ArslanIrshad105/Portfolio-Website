import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DesktopNavbar = () => {
  const theme = useTheme();
  const [navbarBg, setNavbarBg] = useState("transparent"); // State for background color
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg("#040c16"); // Change to black when scrolling past 50px
    } else {
      setNavbarBg("transparent"); // Transparent background when at the top
    }
  };

  // Using IntersectionObserver to track sections
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(`#${id}`);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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

  return (
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
              sx={{
                color: "white",
                textDecoration: "none",
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
  );
};

export default DesktopNavbar;
