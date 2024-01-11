import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const MainContent = () => {
  return (
    <Box
      sx={{
        height: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(107deg, rgba(138,138,138,1) 0%, rgba(192,192,192,1) 50%, rgba(118,118,118,1) 100%)',
        color: 'white',
        width: '100vw',
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 0 }}>
        Univise
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mt: 1, mb: 2 }}>
        Transforming Advising, One Chat at a Time
      </Typography>
      <Link href="/advisor" passHref>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            borderRadius: 50,
            backgroundColor: '#ff0000',
            color: 'white',
            '&:hover': {
              backgroundColor: '#cc0000',
            },
          }}
        >
          Meet Your Advisor
        </Button>
      </Link>
    </Box>
  );
};

export default MainContent;
