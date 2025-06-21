import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ChatContext } from "../contexts/ChatContext";
import MessageInput from "./MessageInput";
import ModelSelector from "./ModelSelector";

const ChatWindow = () => {
  const { state } = useContext(ChatContext);
  const conversation = state.conversations.find(
    (c) => c.id === state.activeConversationId
  );

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 3 }}>
      <ModelSelector />
      <Box sx={{ flex: 1, overflowY: "auto", my: 2 }}>
        {conversation ? (
          conversation.messages.map((msg, idx) => (
            <Box key={idx} sx={{ my: 1 }}>
              <Typography variant="body2" color="textSecondary">
                {msg.role}:
              </Typography>
              <Typography variant="body1">{msg.content}</Typography>
            </Box>
          ))
        ) : (
          <Typography color="textSecondary">Select or start a conversation</Typography>
        )}
      </Box>
      <MessageInput />
    </Box>
  );
};

export default ChatWindow;