import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from '../../styles/AdvisorPage.module.css'; // Import the CSS Module
import FeedbackPopup from './FeedbackPopup'; // Import the new component

type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
  onOpenCapabilities: () => void;
  isLoading: boolean;
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({ question, setQuestion, handleSendClick, onOpenCapabilities, isLoading }) => {
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);

  const handleOpenFeedback = () => {
    setIsFeedbackPopupOpen(true);
  };

  const handleCloseFeedback = () => {
    setIsFeedbackPopupOpen(false);
  };

  const handleSubmitFeedback = (feedback: string) => {
    console.log('Submitted Feedback:', feedback);
  };

  return (
    <Box className={styles.advisorFooter}>
      <Button 
        variant="outlined" 
        className={styles.capabilitiesButton}
        onClick={onOpenCapabilities}
      >
        Capabilities
      </Button>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ask any question ..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className={styles.advisorFooterInput} // Updated class name
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendClick} className={styles.sendButton} disabled={isLoading}>
                {isLoading ? <CircularProgress size={24} /> : <SendIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        disabled={isLoading}
      />
      <Button 
        variant="outlined" 
        className={styles.feedbackButton} // Updated class name
        onClick={handleOpenFeedback}
      >
        Feedback
      </Button>
      <FeedbackPopup
        open={isFeedbackPopupOpen}
        onClose={handleCloseFeedback}
        onSubmitFeedback={handleSubmitFeedback}
      />
    </Box>
  );
};

export default AdvisorFooter;
