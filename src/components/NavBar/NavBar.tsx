import * as React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, useTheme } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { useThemeContext } from '../../ThemeContext';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function PersistentDrawer() {
    const [open, setOpen] = React.useState(false);
    const { primaryColor, setPrimaryColor, backgroundColor, setBackgroundColor } = useThemeContext();
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChangePrimaryColor = (color: string) => {
        setPrimaryColor(color);
    };

    const handleChangeBackgroundColor = (color: string) => {
        setBackgroundColor(color);
    };

    return (
        <Box 
        sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: theme.zIndex.drawer + 1,
                     backgroundColor: theme.palette.background.default,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    ...(open && {
                        marginLeft: drawerWidth,
                        width: `calc(100% - ${drawerWidth}px)`,
                        transition: theme.transitions.create(['width', 'margin'], {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    }),
                }}
            >
                <Toolbar
             
                >
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <Typography variant="h6">Close</Typography>
                    </IconButton>
                </Toolbar>
                <Box sx={{ overflow: 'auto' }}>
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Primary Color
                        </Typography>
                        <MuiColorInput value={primaryColor} onChange={handleChangePrimaryColor} />
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Background Color
                        </Typography>
                        <MuiColorInput value={backgroundColor} onChange={handleChangeBackgroundColor} />
                    </Box>
                </Box>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    marginTop: '64px',
                }}
            >
            </Box>
        </Box>
    );
}
