import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CapabilitiesContent from './CapContent';
import '../../styles/AdvisorPage.css'; // Import the stylesheet

type CapabilitiesPopupProps = {
  open: boolean;
  onClose: () => void;
};

const CapabilitiesPopup: React.FC<CapabilitiesPopupProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <Box className="capabilities-overlay" />

      {/* Pop-up */}
      <Box className="capabilities-popup">
        <IconButton onClick={onClose} className="close-icon">
          <CloseIcon />
        </IconButton>
        <CapabilitiesContent />
      </Box>
    </>
  );
};

export default CapabilitiesPopup;
