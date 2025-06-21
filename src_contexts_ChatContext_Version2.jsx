import React, { createContext, useReducer } from "react";

export const ChatContext = createContext();

const initialState = {
  conversations: [],
  activeConversationId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CONVERSATION':
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
        activeConversationId: action.payload.id,
      };
    case 'SET_ACTIVE_CONVERSATION':
      return {
        ...state,
        activeConversationId: action.payload,
      };
    // Add more actions for chat management as needed
    default:
      return state;
  }
}

const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;