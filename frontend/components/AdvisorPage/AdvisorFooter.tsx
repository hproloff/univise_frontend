import React, {useState} from 'react';
import { Box, TextField, InputAdornment, IconButton, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../../styles/AdvisorPage.css'; // Import the stylesheet
import FeedbackPopup from './FeedbackPopup'; // Import the new component


type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
  onOpenCapabilities: () => void; // Added prop for opening capabilities
  isLoading: boolean; // New prop to indicate loading state
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({ question, setQuestion, handleSendClick, onOpenCapabilities,isLoading  }) => {
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);

  const handleOpenFeedback = () => {
    setIsFeedbackPopupOpen(true);
  };

  const handleCloseFeedback = () => {
    setIsFeedbackPopupOpen(false);
  };

  const handleSubmitFeedback = (feedback: string) => {
    console.log('Submitted Feedback:', feedback);
    // Handle the feedback submission logic here
  };
  
  return (
    <Box className="advisor-footer">
      <Button 
        variant="outlined" 
        className="capabilities-button"
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
        className="advisor-footer-input"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendClick} className="send-button" disabled={isLoading}>
                {isLoading ? <CircularProgress size={24} /> : <SendIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        disabled={isLoading} // Disable the input field when loading
      />
      <Button 
        variant="outlined" 
        className="feedback-button"
        onClick={handleOpenFeedback}
      >
        Feedback
      </Button>
      {/* Feedback Popup */}
      <FeedbackPopup
        open={isFeedbackPopupOpen}
        onClose={handleCloseFeedback}
        onSubmitFeedback={handleSubmitFeedback}
      />
    </Box>
  );
};

export default AdvisorFooter;
