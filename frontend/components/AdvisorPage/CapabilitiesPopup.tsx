import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CapabilitiesContent from './CapContent';


type CapabilitiesPopupProps = {
  open: boolean;
  onClose: () => void;
};

const CapabilitiesPopup: React.FC<CapabilitiesPopupProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }} />

      {/* Pop-up */}
      <Box sx={{
        position: 'fixed',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: '10px',
        zIndex: 1001,
        // Add more styling as needed
      }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
          <CloseIcon />
        </IconButton>
        <CapabilitiesContent />
      </Box>
    </>
  );
};

export default CapabilitiesPopup;
