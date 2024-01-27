import React from 'react';
import { Box, Typography } from '@mui/material';
import content from '../../data/capabilitiesContent.json';
import styles from '../../styles/Capabilities.module.css'; // Import the CSS Module

const CapabilitiesContent: React.FC = () => {
  return (
    <Box className={styles.capabilitiesContainer}> {/* Updated class name */}
      <Typography variant="h5" className={styles.contentTitle}> {/* Updated class name */}
        Capabilities
      </Typography>

      {content.capabilities.map((capability, index) => (
        <Box key={index} className={styles.capabilityItem}> {/* Updated class name */}
          <Typography variant="subtitle1" className={styles.itemTitle}> {/* Updated class name */}
            {capability.title}
          </Typography>
          <Typography>{capability.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CapabilitiesContent;
