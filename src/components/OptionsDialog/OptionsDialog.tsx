import { useState } from 'react';
import { Box, Dialog, DialogContent, useTheme } from '@mui/material';
import { useThemeContext } from '../../ThemeContext';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { DialogHeader } from '../DialogHeader/DialogHeader';
import { ThemeCustomizationButton } from '../ThemeCustomizationButton/ThemeCustomizationButton';

export default function OptionsDialog() {
    const [open, setOpen] = useState(false);
    const { primaryColor, setPrimaryColor, backgroundColor, setBackgroundColor } = useThemeContext();
    const theme = useTheme();

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            bgcolor: theme.palette.background.default,
            color: theme.palette.primary.main
            }}>
            <ThemeCustomizationButton onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogHeader title="Customize Theme Colors" onClose={handleClose} />
                <DialogContent dividers>
                    <ColorPicker initialColor={primaryColor} label="Primary Color" onChange={setPrimaryColor} />
                    <ColorPicker initialColor={backgroundColor} label="Background Color" onChange={setBackgroundColor} />
                </DialogContent>
            </Dialog>
        </Box>
    );
}