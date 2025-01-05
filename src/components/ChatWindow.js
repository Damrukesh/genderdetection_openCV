import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Paper,
  CircularProgress,
} from "@mui/material";
import MessageItem from "./messageItem";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "John", message: "Hello, everyone!" },
    { id: 2, user: "Jane", message: "Hi, John!" },
  ]);
  const [input, setInput] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const prompt = "generate a script for the conducting program for junior in college whole day for";

  const fetchReport = async (message) => {
    setLoading(true);
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC-NDsMulf5m7J5gXRNRqVjZxM9dZZSarQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: `${prompt} ${message}` }],
            },
          ],
        }),
      });
      const reportData = await response.json();
      setReport(reportData);
      setOpen(true);
    } catch (error) {
      setReport({ error: "**Failed to generate report.**" });
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now(), user: "You", message: input };
      setMessages([...messages, newMessage]);
      setInput("");

      fetchReport(input);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
        p: 2,
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
        {messages.map((msg) => (
          <MessageItem key={msg.id} user={msg.user} message={msg.message} />
        ))}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ backgroundColor: "background.paper", borderRadius: 1 }}
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper
          sx={{
            width: "50%",
            maxHeight: "80%",
            overflowY: "auto",
            margin: "5% auto",
            padding: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Response
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : report ? (
            <Typography variant="body1" component="div">
              {report.error ? (
                <Typography color="error" variant="body1" component="div">
                  **{report.error}**
                </Typography>
              ) : (
                report.candidates[0].content.parts[0].text
                  .split("\n")
                  .map((line, index) => (
                    <Typography key={index} sx={{ mb: 1 }} component="div">
                      **{line}**
                    </Typography>
                  ))
              )}
            </Typography>
          ) : (
            <Typography>No response available.</Typography>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default ChatWindow;
