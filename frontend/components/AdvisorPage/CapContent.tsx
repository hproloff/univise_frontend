// components/AdvisorPage/CapabilitiesContent.tsx
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const CapabilitiesContent: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Capabilities
      </Typography>

      <Grid container spacing={2}>
        {/* Capabilities */}
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Capability 1
          </Typography>
          <Typography>Coming Soon</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Capability 2
          </Typography>
          <Typography>Coming Soon</Typography>
        </Grid>

        {/* Separator - Limitations Title */}
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
            Limitations
          </Typography>
        </Grid>

        {/* Limitations */}
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Limitation 1
          </Typography>
          <Typography>Coming Soon</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Limitation 2
          </Typography>
          <Typography>Coming Soon</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CapabilitiesContent;
