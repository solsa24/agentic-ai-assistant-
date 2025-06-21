import React from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import ThemeContextProvider from "./contexts/ThemeContext";
import ChatContextProvider from "./contexts/ChatContext";
import ChatWindow from "./components/ChatWindow";
import ConversationList from "./components/ConversationList";
import SettingsDrawer from "./components/SettingsDrawer";
import ThemeToggle from "./components/ThemeToggle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeContextProvider>
      <ChatContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
            <ConversationList />
            <AnimatePresence>
              <ChatWindow />
            </AnimatePresence>
            <SettingsDrawer />
            <ThemeToggle />
          </Box>
        </ThemeProvider>
      </ChatContextProvider>
    </ThemeContextProvider>
  );
}

export default App;