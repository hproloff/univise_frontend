import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '12vh', 
        backgroundColor: 'black', 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">
        © 2023 Univise.org  |  Aaryush Gupta  |  Harrison Roloff
      </Typography>
    </Box>
  );
};

export default Footer;