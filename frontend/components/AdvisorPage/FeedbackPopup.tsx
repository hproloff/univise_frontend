import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Import the send icon
import "../../styles/Feedback.css"

type FeedbackPopupProps = {
  open: boolean;
  onClose: () => void;
  onSubmitFeedback: (feedback: string) => void;
};

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ open, onClose, onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    onSubmitFeedback(feedback);
    setFeedback('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" className="feedback-popup">
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={4}
          label="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          InputProps={{
            style: { color: 'black' } // Text color
          }}
          InputLabelProps={{
            style: { color: 'black' } // Label color
          }}
        />
      </DialogContent>
      <DialogActions>
        <IconButton onClick={handleSubmit} style={{ color: 'black' }}>
          <SendIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackPopup;
