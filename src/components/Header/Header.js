import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = ({ activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isHeader, setIsHeader] = useState(false);

  useEffect(() => {
    setIsHeader(true);
  });

  return (
    <>
      {isHeader && !isMobile && <DesktopNavbar activeSection={activeSection} />}
      {isHeader && isMobile && <MobileNavbar activeSection={activeSection} />}
    </>
  );
};

export default Navbar;
