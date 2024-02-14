import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info'; // Home icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import Link from 'next/link';
import styles from '../../styles/AdvisorPage.module.css'; // Import the CSS Module

type HeaderProps = {
  // No longer needs onOpenCapabilities
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box className={styles.advisorHeader}>
      <Link href="/about" passHref>
        <IconButton className={styles.homeIcon}>
          <InfoIcon style={{ color: 'black' }}/> 
        </IconButton>
      </Link>

      <Typography variant="h4" className={styles.headerTitle}>
        Univise-0.1.5
      </Typography>

      <IconButton className={styles.profileIcon}>
        <AccountCircleIcon style={{ color: 'black' }} /> 
      </IconButton>
    </Box>
  );
};

export default Header;
