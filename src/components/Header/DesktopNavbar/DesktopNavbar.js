import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { menuItems } from "@/utils/Data/Data";

const DesktopNavbar = ({ activeSection }) => {
  const theme = useTheme();
  const [navbarBg, setNavbarBg] = useState("transparent"); // State for background color

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
  }, [activeSection]);

  // Scroll to section when clicking a link
  const handleMenuClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId.slice(1)); // Remove "#" to get ID
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
                src="assets/media/images/arslan-logo.svg"
                alt="Logo"
                sx={{ height: 40, marginRight: 2 }}
              />
            </Link>
          </Box>
          {/* Menu Section */}
          <Box sx={{ display: "flex", gap: 4 }}>
            {menuItems?.map((item, index) => (
              <Link
                key={index}
                onClick={(e) => handleMenuClick(e, item.id)}
                sx={{ color: "white", textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    borderBottom:
                      activeSection === item.id ? "2px solid white" : "none",
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
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
