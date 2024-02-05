import { Box } from '@mui/material'
import CustomDisplay from '../CustomDisplay/CustomDisplay';
import useClock from '../../hooks/useClock/useClock';
import { useThemeContext } from '../../ThemeContext';
import useDate from '../../hooks/useDate/useDate';

function Display() {
    const { showSeconds } = useThemeContext();
    const formattedTime = useClock(showSeconds);
    const formattedDate = useDate();
    return (
        <Box>
            <CustomDisplay formattedValue={formattedTime} fontSize='clamp(2rem, 20vw, 20rem)' />
            <CustomDisplay formattedValue={formattedDate} fontSize='clamp(1rem, 10vw, 10rem)' />
        </Box>
    )
}

export default Display