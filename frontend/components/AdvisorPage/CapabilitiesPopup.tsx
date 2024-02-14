import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CapabilitiesContent from './CapContent';
import styles from '../../styles/Capabilities.module.css'; // Import the CSS Module

type CapabilitiesPopupProps = {
  open: boolean;
  onClose: () => void;
};

const CapabilitiesPopup: React.FC<CapabilitiesPopupProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className={styles.capabilitiesOverlay}></div>

      <div className={styles.capabilitiesPopup}>
        <button onClick={onClose} className={styles.closeIcon}>
          <CloseIcon />
        </button>
        <CapabilitiesContent />
      </div>
    </>
  );
};

export default CapabilitiesPopup;
