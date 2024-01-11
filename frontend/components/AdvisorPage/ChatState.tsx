import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person'; // Human icon
import AndroidIcon from '@mui/icons-material/Android'; // Robot icon
import Header from './Header';
import AdvisorFooter from './AdvisorFooter';
import CapabilitiesPopup from './CapabilitiesPopup';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      {/* Chat history display */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 4, marginTop: '15vh', marginBottom: '15vh' }}>
        <List>
          {chatHistory.map((message, index) => (
            <ListItem key={index} sx={{
              display: 'flex',
              justifyContent: message.type === 'question' ? 'flex-start' : 'flex-end',
              alignItems: 'flex-start'
            }}>
              {message.type === 'question' && <PersonIcon color="primary" />}
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: message.type === 'question' ? 'left' : 'right' }}>
                    {message.type === 'question' ? 'YOU' : 'ADVISOR'}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ textAlign: message.type === 'question' ? 'left' : 'right' }}>
                    {message.text}
                  </Typography>
                }
              />
              {message.type === 'response' && <AndroidIcon color="secondary" />}
            </ListItem>
          ))}
        </List>
      </Box>

      <AdvisorFooter
        question={currentQuestion}
        setQuestion={setCurrentQuestion}
        handleSendClick={handleSendClick}
        onOpenCapabilities={openPopup} // Passing the prop to AdvisorFooter
      />

      <CapabilitiesPopup open={isPopupOpen} onClose={closePopup} />
    </Box>
  );
};

export default ChatState;
