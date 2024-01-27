import React from 'react';
import { Box, Button } from '@mui/material';
import styles from '../../styles/ChatState.module.css'; // Import the CSS Module

interface SamplePromptsProps {
  onSamplePrompt: (prompt: string) => void;
}

const SamplePrompts: React.FC<SamplePromptsProps> = ({ onSamplePrompt }) => {
  return (
    <Box className={styles.samplePromptsContainer}> {/* Updated class name */}
      <Button className={styles.samplePrompt} onClick={() => onSamplePrompt("What are some good literature electives?")}>
        What are some good literature electives? 
      </Button>
      <Button className={styles.samplePrompt} onClick={() => onSamplePrompt("Help me plan for graduation...")}>
        Help me plan for graduation...
      </Button>
    </Box>
  );
};

export default SamplePrompts;
