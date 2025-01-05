import React, { useState } from "react";
import { Box, Button, Avatar, Typography, Stack } from "@mui/material";
import { Mic, MicOff } from "@mui/icons-material";

const VoiceChannel = () => {
  const [muted, setMuted] = useState(false);
  const participants = [
    { id: 1, name: "John Doe", avatar: "/assets/default-avatar.png" },
    { id: 2, name: "Jane Smith", avatar: "/assets/default-avatar.png" },
  ];

  const toggleMute = () => setMuted(!muted);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        mt: 2,
      }}
    >
      <Typography variant="h6">Active Voice Channel</Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {participants.map((user) => (
          <Box key={user.id} sx={{ textAlign: "center" }}>
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 56, height: 56 }} />
            <Typography variant="body2">{user.name}</Typography>
          </Box>
        ))}
      </Stack>
      <Button
        variant="contained"
        color="primary"
        startIcon={muted ? <MicOff /> : <Mic />}
        onClick={toggleMute}
        sx={{ mt: 2 }}
      >
        {muted ? "Unmute" : "Mute"}
      </Button>
    </Box>
  );
};

export default VoiceChannel;
