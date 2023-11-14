import React from 'react';
import '../devlink/global.css'

import {
    InteractionsProvider,
    SomeWrapper,
    createIX2Engine
} from "../devlink";

// example app: https://github.com/Webflow-Examples/devlink-weather-app/blob/main/pages/_app.tsx
/* 
* export default function App({ Component, pageProps }: AppProps) {
  return (
    <InteractionsProvider createEngine={createIX2Engine}>
      <Layout
        sidebar={<SideNav />}
        topnav={<TopNav />}
        main={<Component {...pageProps} />}
      />
    </InteractionsProvider>
  );
}
*  */
const App = () => {
    return (
        <div className='app'>
            <h1>App</h1>
            <InteractionsProvider createEngine={createIX2Engine}>
                <SomeWrapper prop1={asdas} onBlah={blah} />
                <Widget1 prop1={asdas} onBlah={blah} />
                <Widget2 prop1={asdas} onBlah={blah} />
            </InteractionsProvider>
        </div>
    );
};

export default App;