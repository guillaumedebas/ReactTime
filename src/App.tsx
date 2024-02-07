import React, { useEffect } from 'react';
import OptionsDialog from './components/OptionsDialog/OptionsDialog'
import { useTheme } from '@mui/material/styles';
import Display from './components/Display/Display';
import { Box } from '@mui/material';


const App: React.FC = () => {
  const theme = useTheme();


  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme.palette.background.default]);


  return (
    <Box 
       justifyContent="center"
            alignItems="center"
    sx={{
   
                height: '90vh',
            }}>
      <OptionsDialog />
     <Display />
    </Box>

  );
};

export default App;
