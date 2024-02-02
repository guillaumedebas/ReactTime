import React, { useEffect } from 'react';
import ClockDisplay from './components/ClockDisplay/ClockDiplay';
import OptionsDialog from './components/OptionsDialog/OptionsDialog'
import { useTheme } from '@mui/material/styles';

const App: React.FC = () => {
    const theme = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);


    return (
        <>
            <OptionsDialog />
            <ClockDisplay />
        </>

    );
};

export default App;
