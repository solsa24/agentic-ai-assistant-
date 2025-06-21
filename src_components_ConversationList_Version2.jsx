import React, { useContext } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Button } from "@mui/material";
import { ChatContext } from "../contexts/ChatContext";
import { v4 as uuidv4 } from "uuid";

const ConversationList = () => {
  const { state, dispatch } = useContext(ChatContext);

  const handleNewConversation = () => {
    const id = uuidv4();
    dispatch({
      type: "ADD_CONVERSATION",
      payload: {
        id,
        title: `Conversation ${state.conversations.length + 1}`,
        messages: [],
      },
    });
  };

  return (
    <Box
      sx={{
        width: 280,
        bgcolor: "background.paper",
        borderRight: "1px solid #292929",
        display: { xs: "none", md: "block" },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNewConversation}
        >
          New Chat
        </Button>
      </Box>
      <List>
        {state.conversations.map((conv) => (
          <ListItem key={conv.id} disablePadding>
            <ListItemButton
              selected={state.activeConversationId === conv.id}
              onClick={() => dispatch({ type: "SET_ACTIVE_CONVERSATION", payload: conv.id })}
            >
              <ListItemText primary={conv.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ConversationList;