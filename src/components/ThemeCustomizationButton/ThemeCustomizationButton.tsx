import React from 'react';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

interface ThemeCustomizationButtonProps {
    onClick: () => void;
}

export const ThemeCustomizationButton: React.FC<ThemeCustomizationButtonProps> = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            color="inherit"
            >
            <SettingsIcon sx={{ 
                fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                margin: 'clamp(0.1rem, 1vw, 1rem)'
                 }}  />
        </Button>
    );
};