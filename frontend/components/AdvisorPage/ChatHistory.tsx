import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Memory';
import styles from '../../styles/ChatState.module.css'; // Import the CSS Module

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
        <ListItem key={index} className={`${styles.chatMessage} ${styles[message.type]}`} style={{ position: 'relative' }}>
          <Box className={styles.messageIcon}>
            {message.type === 'response' ? <ComputerIcon /> : <PersonIcon />}
          </Box>
          <Box className={styles.messageTextBlock}>
            <Typography className={styles.messageTitle}>
              {message.type === 'response' ? 'ADVISOR' : 'YOU'}
            </Typography>
            <Typography className={styles.messageContent}>{message.text}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatHistory;
