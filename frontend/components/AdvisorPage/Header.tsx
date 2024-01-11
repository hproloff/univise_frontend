// components/AdvisorPage/Header.tsx
import { Box, Typography, IconButton, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import React from 'react';
import Link from 'next/link';

type HeaderProps = {
  onOpenCapabilities: () => void;
};

const Header: React.FC<HeaderProps> = ({ onOpenCapabilities }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '15vh',
      backgroundColor: 'white',
      px: 2,
      boxSizing: 'border-box',
    }}>
      <Link href="/" passHref>
        <IconButton sx={{ color: 'red' }}>
          <HomeIcon /> {/* Home icon colored red */}
        </IconButton>
      </Link>

      <Typography variant="h4">
        Univise-0.1.0
      </Typography>

      <Button 
        variant="outlined" 
        sx={{
          borderRadius: 50, 
          color: 'red', 
          borderColor: 'red', 
        }}
        onClick={onOpenCapabilities}
      >
        Capabilities
      </Button>
    </Box>
  );
};

export default Header;
