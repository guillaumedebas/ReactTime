import { createContext, useContext, useState, ReactNode } from 'react';
import { getTheme } from './theme'; 
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

interface ThemeContextType {
  primaryColor: string;
  backgroundColor: string;
  setPrimaryColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
}

const defaultPrimaryColor = '#0064ff'; 
const defaultBackgroundColor = '#000000'; 

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState<string>(defaultPrimaryColor);
  const [backgroundColor, setBackgroundColor] = useState<string>(defaultBackgroundColor);
  
  const theme = getTheme(primaryColor, backgroundColor); 

  return (
    <ThemeContext.Provider value={{ primaryColor, backgroundColor, setPrimaryColor, setBackgroundColor }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
