import React from 'react';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

interface ThemeCustomizationButtonProps {
    onClick: () => void;
}

export const ThemeCustomizationButton: React.FC<ThemeCustomizationButtonProps> = ({ onClick }) => {
    return (
        <Button
            startIcon={<SettingsIcon />}
            onClick={onClick}
            color="inherit">
        </Button>
    );
};