import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Send button icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import '../../styles/AdvisorPage.css'; // Import the stylesheet

type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({ question, setQuestion, handleSendClick }) => {
  return (
    <Box className="advisor-footer">
      <IconButton size="large" className="advisor-footer-icon">
        <AccountCircleIcon />
      </IconButton>
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
              <IconButton onClick={handleSendClick} className="send-button">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default AdvisorFooter;
