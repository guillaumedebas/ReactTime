import React from 'react';
import { Typography, Grid } from '@mui/material';
import useClock from '../../hooks/useClock/useClock';
import { useTheme } from '@mui/material/styles';

const ClockDisplay: React.FC = () => {
    const formattedTime = useClock();
    const theme = useTheme(); 

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
               
                backgroundColor: theme.palette.background.default
            }}>
            <Grid item>
                <Typography
                    component="p"
                    color="primary"
                    sx={{
                        fontSize: 'clamp(2rem, 20vw, 20rem)'
                    }}>
                    {formattedTime}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ClockDisplay;