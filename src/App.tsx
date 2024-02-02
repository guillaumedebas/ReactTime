import React from 'react';
import ClockDisplay from './components/ClockDisplay/ClockDiplay';
import OptionsDialog from './components/OptionsDialog/OptionsDialog'


const App: React.FC = () => {
    return (
        <>
            <OptionsDialog />
            <ClockDisplay />
        </>

    );
};

export default App;
