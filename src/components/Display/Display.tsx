import { Grid } from '@mui/material'
import CustomDisplay from '../CustomDisplay/CustomDisplay';
import useClock from '../../hooks/useClock/useClock';
import { useThemeContext } from '../../ThemeContext';
import useDate from '../../hooks/useDate/useDate';

function Display() {
    const { showSeconds } = useThemeContext();
    const formattedTime = useClock(showSeconds);
    const formattedDate = useDate();
    return (
        <Grid
            container
            direction="column"
            wrap="nowrap"
            justifyContent="center"
            alignItems="center"
            sx={{
   
                height: '90%',
            }}>
            
            <CustomDisplay formattedValue={formattedTime} fontSize='clamp(1.5rem, 15vw, 15rem)' />
            <CustomDisplay formattedValue={formattedDate} fontSize='clamp(0.7rem, 7vw, 7rem)' />
        </Grid>
    )
}

export default Display