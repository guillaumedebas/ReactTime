import React, { useEffect } from 'react';
import OptionsDialog from './components/OptionsDialog/OptionsDialog'
import { useTheme } from '@mui/material/styles';
import Display from './components/Display/Display';


const App: React.FC = () => {
  const theme = useTheme();


  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);


  return (
    <>
      <OptionsDialog />
     <Display />
    </>

  );
};

export default App;
