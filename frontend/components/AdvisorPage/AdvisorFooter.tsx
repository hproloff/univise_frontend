import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Send button icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import React from 'react';

type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({ question, setQuestion, handleSendClick }) => {
  return (
    <Box sx={{
      height: '15vh', // Footer height
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'lightgrey',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      px: '5%', // Increased horizontal padding
      boxSizing: 'border-box',
    }}>
      <IconButton size="large" sx={{ color: 'black', fontSize: '250%', mr: 4 }}> {/* Increased icon size and added right margin */}
        <AccountCircleIcon />
      </IconButton>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ask any question ..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{
          borderRadius: 50,
          height: '60%', // Adjust the height percentage as needed
          width: '85%', // Adjust the width to extend from about 20% to 90% of the page width
          '& .MuiOutlinedInput-root': {
            height: '100%',
            alignItems: 'center',
            paddingRight: 1, // Adjusted right padding for the send button
            border: '1px solid black', // Black border for the input box
            backgroundColor: 'white', // White background for the input box
          },
          '& .MuiOutlinedInput-input': {
            padding: '0 24px',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendClick} sx={{ color: 'red' }}> {/* Send icon color */}
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
