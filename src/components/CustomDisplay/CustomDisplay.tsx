import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CustomDisplayProps {
    formattedValue: string;
    fontSize?: string;
}

const CustomDisplay: React.FC<CustomDisplayProps> = ({ formattedValue, fontSize = 'clamp(2rem, 20vw, 20rem)' }) => {
    const theme = useTheme(); 

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                
                width: '100vw',
                backgroundColor: theme.palette.background.default
            }}>
            <Grid item>
                <Typography
                    component="p"
                    color="primary"
                    sx={{
                        fontSize: fontSize
                    }}>
                    {formattedValue}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default CustomDisplay;
