import React from 'react';
import { Box, Typography } from '@mui/material';
import content from '../../data/capabilitiesContent.json';
import '../../styles/Capabilities.css'; // Import the new stylesheet

const CapabilitiesContent: React.FC = () => {
  return (
    <Box className="capabilities-container">
      <Typography variant="h5" className="content-title">
        Capabilities
      </Typography>

      {content.capabilities.map((capability, index) => (
        <Box key={index} className="capability-item">
          <Typography variant="subtitle1" className="item-title">
            {capability.title}
          </Typography>
          <Typography>{capability.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CapabilitiesContent;
