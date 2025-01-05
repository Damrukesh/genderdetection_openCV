import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "background.default" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <ChatWindow />
      </Box>
    </Box>
  );
};

export default App;
