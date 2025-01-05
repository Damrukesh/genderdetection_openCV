import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Add, Chat, VoiceChat, Settings } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 280,
        backgroundColor: "background.paper",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
      }}
    >
      {/* Text Channels */}
      <Typography variant="h6" sx={{ p: 2, borderBottom: "1px solid #444" }}>
        Text Channels
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Chat sx={{ color: "text.secondary" }} />
          </ListItemIcon>
          <ListItemText primary="General" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Chat sx={{ color: "text.secondary" }} />
          </ListItemIcon>
          <ListItemText primary="Announcements" />
        </ListItemButton>
      </List>

      {/* Voice Channels */}
      <Typography variant="h6" sx={{ p: 2, borderBottom: "1px solid #444", mt: 2 }}>
        Voice Channels
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <VoiceChat sx={{ color: "text.secondary" }} />
          </ListItemIcon>
          <ListItemText primary="Join Voice Channel" />
        </ListItemButton>
      </List>

      {/* Settings */}
      <ListItemButton sx={{ mt: "auto" }}>
        <ListItemIcon>
          <Settings sx={{ color: "text.secondary" }} />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Box>
  );
};

export default Sidebar;
