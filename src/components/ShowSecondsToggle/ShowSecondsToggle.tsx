import { FormControlLabel, Switch } from '@mui/material';
import { useThemeContext } from '../../ThemeContext'; 

export default function ShowSecondsToggle() {
    const { showSeconds, setShowSeconds } = useThemeContext();

    const toggleShowSeconds = () => {
        setShowSeconds(!showSeconds);
    };

    return (
        <FormControlLabel
            control={<Switch checked={showSeconds} onChange={toggleShowSeconds} />}
            label="Show Seconds"
        />
    );
}
