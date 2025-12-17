import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../styles/Header.styles';


interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <div className={styles.container}>
      {onBack && (
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          className={styles.backButton}
        >
          나가기
        </Button>
      )}

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Header;