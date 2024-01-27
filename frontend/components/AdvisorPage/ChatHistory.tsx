import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import '../../styles/ChatState.css'; // Import necessary styles

interface ChatMessage {
    type: string;
    text: string;
  }
  
  interface ChatHistoryProps {
    chatHistory: ChatMessage[];
  }


  const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
    return (
    <List>
      {chatHistory.map((message, index) => (
        <ListItem key={index} className={`chat-message ${message.type}`} style={{ position: 'relative' }}>
          <Box className="message-icon">
            {message.type === 'response' ? <AndroidIcon /> : <PersonIcon />}
          </Box>
          <Box className="message-text-block">
            <Typography className="message-title">
              {message.type === 'response' ? 'ADVISOR' : 'YOU'}
            </Typography>
            <Typography className="message-content">{message.text}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatHistory;
