import React from 'react';
import { Box, Typography } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';

interface ColorPickerProps {
  initialColor: string;
  label: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor, label, onChange }) => {
  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <MuiColorInput value={initialColor} onChange={onChange} fullWidth />
    </Box>
  );
};
