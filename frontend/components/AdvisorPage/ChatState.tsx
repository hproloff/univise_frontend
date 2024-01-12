import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import Header from './Header';
import AdvisorFooter from './AdvisorFooter';
import CapabilitiesPopup from './CapabilitiesPopup';
import '../../styles/ChatState.css';
import { getResponse } from '../../services/apiService';

interface ChatMessage {
  type: string;
  text: string;
}

interface ChatStateProps {
  chatHistory: ChatMessage[];
  currentQuestion: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const ChatState: React.FC<ChatStateProps> = ({ chatHistory, currentQuestion, setCurrentQuestion }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [localChatHistory, setLocalChatHistory] = useState<ChatMessage[]>(chatHistory);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSendClick = async () => {
    if (!currentQuestion.trim()) return; // Prevent sending empty messages

    const updatedChatHistory = [...localChatHistory, { type: 'question', text: currentQuestion }];
    setLocalChatHistory(updatedChatHistory);

    try {
      const response = await getResponse(currentQuestion);
      if (response) {
        updatedChatHistory.push({ type: 'response', text: response });
      } else {
        updatedChatHistory.push({ type: 'response', text: 'No response received.' });
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      updatedChatHistory.push({ type: 'response', text: 'Error fetching response.' });
    }

    setLocalChatHistory(updatedChatHistory);
    setCurrentQuestion(''); // Clear the input box after sending
  };

  const handleSamplePrompt = async (prompt: string) => {
    setCurrentQuestion(prompt);
    handleSendClick();
  };


  return (
    <>
    <Header />
    <Box className="chat-container">
      <Box className="chat-history">
        {localChatHistory.length === 0 ? (
          <Box className="sample-prompts-container">
            <Button className="sample-prompt" onClick={() => handleSamplePrompt("What classes can I take?")}>
              What classes can I take?
            </Button>
            <Button className="sample-prompt" onClick={() => handleSamplePrompt("Help me plan for graduation...")}>
              Help me plan for graduation...
            </Button>
          </Box>
        ) : (
          <List>
          {localChatHistory.map((message, index) => (
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
        )}
      </Box>

      <AdvisorFooter
        question={currentQuestion}
        setQuestion={setCurrentQuestion}
        handleSendClick={handleSendClick}
        onOpenCapabilities={openPopup}
      />

      <CapabilitiesPopup open={isPopupOpen} onClose={closePopup} />
    </Box>
    </>
  );
};

export default ChatState;
