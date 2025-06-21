import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        bgcolor: "background.paper",
        color: "text.primary",
        border: "1px solid #292929",
      }}
      onClick={toggleTheme}
    >
      <Brightness4Icon />
    </IconButton>
  );
};

export default ThemeToggle;