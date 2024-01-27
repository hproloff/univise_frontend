import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CapabilitiesContent from './CapContent';
import styles from '../../styles/AdvisorPage.module.css'; // Import the CSS Module

type CapabilitiesPopupProps = {
  open: boolean;
  onClose: () => void;
};

const CapabilitiesPopup: React.FC<CapabilitiesPopupProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <Box className={styles.capabilitiesOverlay} /> {/* Updated class name */}

      {/* Pop-up */}
      <Box className={styles.capabilitiesPopup}> {/* Updated class name */}
        <IconButton onClick={onClose} className={styles.closeIcon}> {/* Updated class name */}
          <CloseIcon />
        </IconButton>
        <CapabilitiesContent />
      </Box>
    </>
  );
};

export default CapabilitiesPopup;
