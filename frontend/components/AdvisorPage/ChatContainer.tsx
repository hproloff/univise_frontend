import React from 'react';
import ChatHistory from './ChatHistory';
import SamplePrompts from './SamplePrompts';
import { Box } from '@mui/material';
import styles from '../../styles/ChatState.module.css'; // Import the CSS Module

interface ChatMessage {
  type: string;
  text: string;
}

interface ChatContainerProps {
  chatHistory: ChatMessage[];
  onSamplePrompt: (prompt: string) => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ chatHistory, onSamplePrompt }) => {
  return (
    <Box className={styles.chatContainer}> 
      {chatHistory.length === 0 ? (
        <SamplePrompts onSamplePrompt={onSamplePrompt} />
      ) : (
        <ChatHistory chatHistory={chatHistory} />
      )}
    </Box>
  );
};

export default ChatContainer;