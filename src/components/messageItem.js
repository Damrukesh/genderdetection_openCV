import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const MessageItem = ({ user, message }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
    <Avatar sx={{ mr: 2 }}>{user[0]}</Avatar>
    <Box>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {user}
      </Typography>
      <Typography variant="body2">{message}</Typography>
    </Box>
  </Box>
);

export default MessageItem;
