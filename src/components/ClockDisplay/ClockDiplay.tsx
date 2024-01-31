import React from 'react';
import { Typography, Grid } from '@mui/material';
import useClock from '../../hooks/useClock/useClock';

const ClockDisplay: React.FC = () => {
    const formattedTime = useClock();

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: '100vh',
                backgroundColor: 'black'
            }}>
            <Grid item>
                <Typography
                    component="p"
                    color="blue"
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


