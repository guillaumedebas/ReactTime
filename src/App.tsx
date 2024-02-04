import React, { useEffect } from 'react';
import CustomDisplay from './components/CustomDisplay/CustomDisplay';
import OptionsDialog from './components/OptionsDialog/OptionsDialog'
import { useTheme } from '@mui/material/styles';
import useClock from './hooks/useClock/useClock';
import { useThemeContext } from './ThemeContext';
import useDate from './hooks/useDate/useDate';

const App: React.FC = () => {
    const theme = useTheme();
    const { showSeconds } = useThemeContext();
    const formattedTime = useClock(showSeconds);
    const formattedDate = useDate();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);


    return (
        <>
            <OptionsDialog />
            <CustomDisplay formattedValue={formattedTime} fontSize='clamp(2rem, 20vw, 20rem)'/>
             <CustomDisplay formattedValue={formattedDate} fontSize='clamp(1rem, 10vw, 10rem)'/>
        </>

    );
};

export default App;
