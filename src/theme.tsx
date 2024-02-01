// theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (primaryColor: string, backgroundColor: string) => createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    background: {
      default: backgroundColor,
    },
  },
});
