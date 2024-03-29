import React from 'react';
import { DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogHeaderProps {
  title: string;
  onClose: () => void;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ title, onClose }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      <Typography variant="h6" component="span">
        {title}
      </Typography>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};