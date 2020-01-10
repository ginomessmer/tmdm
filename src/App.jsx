/*global chrome*/

import React, { useState, useEffect } from 'react';
import { ListItem } from './components'
import { Progress } from "@microsoft/fast-components-react-msft";

import './App.css';
import useDarkMode from 'use-dark-mode';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';

const App = () => {
  const darkMode = useDarkMode();
  const designSystem = {
    backgroundColor: darkMode.value ? '#333' : '#FFF'
  };

  const [downloads, setDownloads] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    chrome.downloads.search({state: 'complete'}, d => {
      setDownloads(d);
      setLoading(false);
    });
  }, []);

  console.log(JSON.stringify(downloads));

  return (
    <DesignSystemProvider designSystem={designSystem}>
      {isLoading && <Progress />}

      {downloads && downloads.length > 0 && !isLoading && <div>
        {downloads.map(d => <ListItem key={d.id} download={d} />)}
      </div>}
    </DesignSystemProvider>
  );
}
  
export default App;
