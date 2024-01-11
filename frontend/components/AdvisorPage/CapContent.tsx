import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import content from '../../data/capabilitiesContent.json'; // Adjust the path as necessary
import '../../styles/AdvisorPage.css'; // Import the stylesheet

const CapabilitiesContent: React.FC = () => {
  return (
    <Box className="capabilities-content">
      <Typography variant="h6" className="content-title">
        Capabilities
      </Typography>

      <Grid container spacing={2}>
        {/* Capabilities */}
        {content.capabilities.map((capability, index) => (
          <Grid item xs={6} key={index} className="content-item">
            <Typography variant="subtitle1" className="item-title">
              {capability.title}
            </Typography>
            <Typography>{capability.description}</Typography>
          </Grid>
        ))}

        {/* Separator - Limitations Title */}
        <Grid item xs={12} className="content-title">
          <Typography variant="h6">
            Limitations
          </Typography>
        </Grid>

        {/* Limitations */}
        {content.limitations.map((limitation, index) => (
          <Grid item xs={6} key={index} className="content-item">
            <Typography variant="subtitle1" className="item-title">
              {limitation.title}
            </Typography>
            <Typography>{limitation.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CapabilitiesContent;
