import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styles from '../../styles/AdvisorFooter.module.css'; // Import the CSS Module
import CircularProgress from '@mui/material/CircularProgress';

type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
  onOpenCapabilities: () => void;
  isLoading: boolean;
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({ question, setQuestion, handleSendClick, onOpenCapabilities, isLoading }) => {

  // URL of your Google Form
  const googleFormUrl = 'https://forms.gle/3Rmtpv7u4AFHpwi7A';

  // Opens the Google Form in a new tab
  const handleOpenFeedback = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className={styles.advisorFooter}>
      <button className={styles.capabilitiesButton} onClick={onOpenCapabilities}>
        Capabilities
      </button>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Ask any question ..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={styles.advisorFooterInput} 
          disabled={isLoading}
        />
        <button className={styles.sendButton} onClick={handleSendClick} disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} style={{ color: 'black' }} /> : <SendIcon style={{ color: 'black' }} />}
        </button>
      </div>

      <button className={styles.feedbackButton} onClick={handleOpenFeedback}>
        Feedback
      </button>
    </div>
  );
};

export default AdvisorFooter;
