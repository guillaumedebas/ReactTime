import { useState, useEffect } from 'react';

// Le hook useClock retourne une chaîne de caractères représentant l'heure formatée
const useClock = (): string => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime: string = currentTime.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return formattedTime;
};

export default useClock;