import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Close from "@mui/icons-material/Close";
import { menuItems } from "@/utils/Data/Data";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    position: "relative",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

// const menuItems = [
//   {
//     name: "HOME",
//     id: "#home",
//   },
//   {
//     name: "ABOUT ME",
//     id: "#about",
//   },
//   {
//     name: "SERVICES",
//     id: "#services",
//   },
//   {
//     name: "SKILLS",
//     id: "#skills",
//   },
//   {
//     name: "PROJECTS",
//     id: "#projects",
//   },
//   {
//     name: "CONTACT",
//     id: "#contact",
//   },
// ];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent"); // State for background color
  const [activeSection, setActiveSection] = useState("#home");
  const drawerRef = useRef();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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

  // Detect clicks outside the drawer to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleDrawerClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: navbarBg, // Background color controlled by scroll
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ padding: "20px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src="assets/media/images/arslan-logo.svg" // Replace with your logo path
              alt="Logo"
              sx={{ height: 40, marginRight: 2 }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              display: open ? "none" : "",
              border: "1px solid #fff",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        ref={drawerRef}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#040c16",
            color: "#fff",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={(e) => handleMenuClick(e, item.id)}
            >
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": { cursor: "pointer" },
                    borderBottom:
                      activeSection === item.id ? "2px solid white" : "none",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
