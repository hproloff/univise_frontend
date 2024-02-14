import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../../styles/AdvisorFooter.module.css'; // Import the CSS Module

type AdvisorFooterProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSendClick: () => void;
  onOpenCapabilities: () => void;
  isLoading: boolean;
};

const AdvisorFooter: React.FC<AdvisorFooterProps> = ({
  question,
  setQuestion,
  handleSendClick,
  onOpenCapabilities,
  isLoading,
}) => {
  const googleFormUrl = 'https://forms.gle/3Rmtpv7u4AFHpwi7A';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileView = windowWidth < 700;

  if (isMobileView) {
    // Mobile View Layout
    return (
      <div className={styles.advisorFooter}>
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
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.button} ${styles.capabilitiesButton}`}
            onClick={onOpenCapabilities}
          >
            Capabilities
          </button>
          <button
            className={`${styles.button} ${styles.feedbackButton}`}
            onClick={() => window.open(googleFormUrl, '_blank')}
          >
            Feedback
          </button>
        </div>
      </div>
    );
  } else {
    // Normal (Wider Screen) View Layout
    return (
      <div className={styles.advisorFooter}>
        <button
          className={`${styles.button} ${styles.capabilitiesButton}`}
          onClick={onOpenCapabilities}
        >
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
        <button
          className={`${styles.button} ${styles.feedbackButton}`}
          onClick={() => window.open(googleFormUrl, '_blank')}
        >
          Feedback
          </button>
      </div>
    );
  }
};

export default AdvisorFooter;
