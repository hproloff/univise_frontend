import { Grid, Typography, Box } from '@mui/material';

const OurStory = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4, // Adjust padding as needed
        minHeight: '40vh', // Adjust the height as needed to make the section larger
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(138deg, rgba(153,27,27,1) 0%, rgba(230,46,46,1) 50%, rgba(153,27,27,1) 100%)',
        color: 'white', // Set text color to white
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column"> {/* Adjust spacing as needed */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: 'white' }}>
            Our Story
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}> {/* Adjust width as needed */}
          <Typography variant="body1" align="center" sx={{ color: 'white' }}>
          Frustrated by the inefficiencies of traditional academic advising, we created Univise to address the challenges we and many others faced: information scattered across various sources, limited availability of advisors, and a one-size-fits-all approach that often missed the mark. Our journey as students struggling to navigate the complex world of academic planning, course selection, and career advice sparked a desire for change. 
          <br></br>
          <br></br>
          We envisioned a system where guidance is not only readily available but also consolidated and tailored to individual needs. Univise is the culmination of our efforts to transform academic advising into a more efficient, accessible, and personalized experience for every student.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurStory;