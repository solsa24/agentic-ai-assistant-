import { createTheme } from "@mui/material/styles";

const cyberpunkPalette = {
  primary: {
    main: "#00fff7",
    dark: "#00bfae"
  },
  secondary: {
    main: "#ff00ea",
    dark: "#b800a6"
  },
  background: {
    default: "#181A20",
    paper: "#23242a"
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#b2b2b2"
  }
};

const theme = createTheme({
  palette: {
    mode: "dark",
    ...cyberpunkPalette
  },
  typography: {
    fontFamily: "'Share Tech Mono', monospace"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "bold"
        }
      }
    }
  }
});

export default theme;