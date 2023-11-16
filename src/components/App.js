import React from 'react';
import '../devlink/global.css'

import {
    InteractionsProvider,
    SomeWrapper,
    createIX2Engine
} from "../devlink";
import {Nav} from "../devlink/Nav";
import {NurserySearchForm} from "../devlink/NurserySearchForm";

// example app: https://github.com/Webflow-Examples/devlink-weather-app/blob/main/pages/_app.tsx

const App = () => {
    return (
        <div className='app'>
            <Nav />
            <NurserySearchForm />
        </div>
    );
};

export default App;