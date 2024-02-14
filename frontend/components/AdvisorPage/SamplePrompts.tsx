import React from 'react';
import { Box, Button } from '@mui/material';

interface SamplePromptsProps {
  onSamplePrompt: (prompt: string) => void;
}

const SamplePrompts: React.FC<SamplePromptsProps> = ({ onSamplePrompt }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      <Button style={{ width: '400px' , borderRadius: '50px', padding: '8px 16px', textAlign: 'center', backgroundColor: 'white', border: '2px solid black', color: 'black', cursor: 'pointer', textTransform: 'capitalize' }} onClick={() => onSamplePrompt("What are some good literature electives?")}>
        Easy literature electives? 
      </Button>
      <Button style={{ width: '400px', borderRadius: '50px', padding: '8px 16px', textAlign: 'center', backgroundColor: 'white', border: '2px solid black', color: 'black', cursor: 'pointer', textTransform: 'capitalize' }} onClick={() => onSamplePrompt("Help me plan for graduation...")}>
        Help me plan for graduation
      </Button>
    </Box>
  );
};

export default SamplePrompts;
