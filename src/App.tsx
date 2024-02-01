import React from 'react';
import ClockDisplay from './components/ClockDisplay/ClockDiplay';
import NavBar from './components/NavBar/NavBar'


const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <ClockDisplay />
        </>

    );
};

export default App;
