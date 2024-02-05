import React from 'react';
import { Typography, Grid } from '@mui/material';


interface CustomDisplayProps {
    formattedValue: string;
    fontSize?: string;
}

const CustomDisplay: React.FC<CustomDisplayProps> = ({ formattedValue, fontSize = 'clamp(2rem, 20vw, 20rem)' }) => {


    return (
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
    );
};

export default CustomDisplay;
