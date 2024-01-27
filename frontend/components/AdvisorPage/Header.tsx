import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import Link from 'next/link';

type HeaderProps = {
  // No longer needs onOpenCapabilities
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box className="advisor-header">
      <Link href="/about" passHref>
        <IconButton className="home-icon">
          <HomeIcon /> {/* Home icon */}
        </IconButton>
      </Link>

      <Typography variant="h4" className="header-title">
        Univise-0.1.0
      </Typography>

      <IconButton className="profile-icon">
        <AccountCircleIcon /> {/* Profile icon */}
      </IconButton>
    </Box>
  );
};

export default Header;
