import React, { useState, useContext } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChatContext } from "../contexts/ChatContext";
import usePuterAI from "../hooks/usePuterAI";

const MessageInput = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(ChatContext);
  const sendMessage = usePuterAI();

  const handleSend = async () => {
    if (!input.trim() || !state.activeConversationId) return;
    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        conversationId: state.activeConversationId,
        message: { role: "user", content: input },
      },
    });
    setInput("");
    await sendMessage(input, state.activeConversationId, dispatch);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        multiline
        minRows={1}
        maxRows={4}
        variant="outlined"
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;