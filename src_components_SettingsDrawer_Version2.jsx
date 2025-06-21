import React from "react";
import { Drawer, Box, Typography } from "@mui/material";

const SettingsDrawer = () => {
  // TODO: Implement settings (enter key behavior, etc.)
  return (
    <Drawer anchor="right" open={false} onClose={() => {}}>
      <Box sx={{ width: 320, p: 3 }}>
        <Typography variant="h6">Settings</Typography>
        {/* Add settings controls here */}
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;