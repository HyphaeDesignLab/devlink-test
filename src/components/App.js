import React, {useState, useEffect} from 'react';
import '../devlink/global.css'
import { useDebouncedCallback } from 'use-debounce';

import {
    InteractionsProvider,
    SomeWrapper,
    createIX2Engine
} from "../devlink";
import {Nav} from "../devlink/Nav";
import {NurserySearchForm} from "../devlink/NurserySearchForm";
import {Results} from "../devlink/Results";
import {ResultItem} from "../devlink/ResultItem";

// example app: https://github.com/Webflow-Examples/devlink-weather-app/blob/main/pages/_app.tsx

const data = [
    'Oakland',
    'San Francisco',
    'Berkeley',
];
const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState([])

    const searchRawCallback = e => {
        e.preventDefault();
        searchCallback(e.target.value);
        return false;
    };
    const searchCallback = useDebouncedCallback(newSearchValue => {
        if (searchQuery !== newSearchValue) {
            setSearchQuery(newSearchValue.toLowerCase());
        }
    },1000);

    useEffect(() => {
        if (!searchQuery) {
            setResults([]);
            return;
        }
        const arr = data.filter(name => {
            return !!name.toLowerCase().match(searchQuery);
        });
        setResults(arr);
    }, [searchQuery]);

    return (
        <div className='app'>
            <Nav />
            <NurserySearchForm props={{onChange:e=>searchRawCallback(e)}} />
            <Results
                showSampleResult={false}
                hasZeroResults={!!searchQuery && !results.length}
                children={results.map(name =>
                    <ResultItem key={name} text={name}/>
                )}/>
        </div>
    );
};

export default App;