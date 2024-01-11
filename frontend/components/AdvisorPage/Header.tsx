import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import Link from 'next/link';
import '../../styles/AdvisorPage.css'; // Import the stylesheet

type HeaderProps = {
  onOpenCapabilities: () => void;
};

const Header: React.FC<HeaderProps> = ({ onOpenCapabilities }) => {
  return (
    <Box className="advisor-header">
      <Link href="/" passHref>
        <IconButton className="home-icon">
          <HomeIcon /> {/* Home icon colored red */}
        </IconButton>
      </Link>

      <Typography variant="h4" className="header-title">
        Univise-0.1.0
      </Typography>

      <Button 
        variant="outlined" 
        className="capabilities-button"
        onClick={onOpenCapabilities}
      >
        Capabilities
      </Button>
    </Box>
  );
};

export default Header;
