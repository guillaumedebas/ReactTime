import { useState, useEffect } from 'react';

const useDate = (): string => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
   
     const timer = setInterval(() => setCurrentDate(new Date()), 1000); 
    return () => clearInterval(timer);
  }, []);


  const formattedDate: string = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
  });

  return formattedDate;
};

export default useDate;
