import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import Header from './Header';
import AdvisorFooter from './AdvisorFooter';
import CapabilitiesPopup from './CapabilitiesPopup';
import '../../styles/ChatState.css'; // Import the new stylesheet

interface ChatStateProps {
  chatHistory: { type: string, text: string }[];
  currentQuestion: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
}

const ChatState: React.FC<ChatStateProps> = ({ chatHistory, currentQuestion, setCurrentQuestion, handleSendClick }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Box className="chat-container">
      <Header />

      <Box className="chat-history">
        {chatHistory.length === 0 ? (
          <Box className="sample-prompts-container">
            <Button className="sample-prompt">What classes can I take?</Button>
            <Button className="sample-prompt">Help me plan for graduation...</Button>
          </Box>
        ) : (
          <List>
            {chatHistory.map((message, index) => (
              <ListItem key={index} className={`chat-message ${message.type}`}>
                {message.type === 'response' && <AndroidIcon />}
                <ListItemText
                  primary={<Typography className="message-text">{message.type === 'response' ? 'ADVISOR' : 'YOU'}</Typography>}
                  secondary={<Typography className="message-text">{message.text}</Typography>}
                />
                {message.type === 'question' && <PersonIcon />}
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
  );
};

export default ChatState;
