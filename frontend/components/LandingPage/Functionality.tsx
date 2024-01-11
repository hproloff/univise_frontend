import { Grid, Typography, Box } from '@mui/material';

const OurStory = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        minHeight: '40vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(138deg, rgba(153,27,27,1) 0%, rgba(230,46,46,1) 50%, rgba(153,27,27,1) 100%)',
        color: 'white',
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column"> {/* Adjust spacing as needed */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center" sx={{ color: 'white' }}>
            Functionality
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}> {/* Adjust width as needed */}
          <Typography variant="body1" align="center" sx={{ color: 'white' }}>
          Univise stands out with its cutting-edge approach to academic advising, employing a Retrieval Augmented Generation model. This means we combine the latest in AI technology with up-to-date, publicly available university information to offer personalized, reliable advice. Our system constantly updates itself with the newest data, ensuring you get the most current and relevant guidance. 
          <br></br>
          <br></br>
          It is designed to understand and adapt to your specific academic needs, making navigating your university experience simpler, more efficient, and tailored just for you. In short, Univise is not just a tool; it is your personalized pathfinder through the complexities of college life.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurStory;