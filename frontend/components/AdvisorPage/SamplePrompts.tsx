import React from 'react';
import { Box, Button } from '@mui/material';
import '../../styles/ChatState.css'; // Import necessary styles

interface SamplePromptsProps {
    onSamplePrompt: (prompt: string) => void;
  }


const SamplePrompts: React.FC<SamplePromptsProps> = ({ onSamplePrompt }) => {
    return (
    <Box className="sample-prompts-container">
      <Button className="sample-prompt" onClick={() => onSamplePrompt("What are some good literature electives?")}>
        What are some good literature electives? 
      </Button>
      <Button className="sample-prompt" onClick={() => onSamplePrompt("Help me plan for graduation...")}>
        Help me plan for graduation...
      </Button>
    </Box>
  );
};

export default SamplePrompts;
