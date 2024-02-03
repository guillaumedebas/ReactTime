import { useState, useEffect } from 'react';


const useClock = (showSeconds = true): string => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime: string = currentTime.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: showSeconds ? '2-digit' : undefined,
        hour12: false
    });

    return formattedTime;
};

export default useClock;