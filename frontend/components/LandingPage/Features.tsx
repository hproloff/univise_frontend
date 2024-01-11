import { Grid, Typography, Box } from '@mui/material';

const Features = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        textAlign: 'center',
        minHeight: '60vh', 
        background: 'linear-gradient(138deg, rgba(164,164,164,1) 0%, rgba(194,194,194,1) 50%, rgba(132,132,132,1) 100%)', 
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 5 }}>
        Features
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <img src="/icons/1.png" alt="Feature 1" style={{ width: '30%', height: 'auto' }} /> {/* Smaller icon size */}
          <Typography>
            Custom tailored to your preferences and journey
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src="/icons/2.png" alt="Feature 2" style={{ width: '30%', height: 'auto' }} /> {/* Smaller icon size */}
          <Typography>
            24/7 access to free chatbot
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src="/icons/3.png" alt="Feature 3" style={{ width: '30%', height: 'auto' }} /> {/* Smaller icon size */}
          <Typography>
            Scheduling and enrollment recommendations
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src="/icons/4.png" alt="Feature 4" style={{ width: '30%', height: 'auto' }} /> {/* Smaller icon size */}
          <Typography>
            Degree and graduation planning
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
