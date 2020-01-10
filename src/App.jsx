/*global chrome*/

import React, { useState, useEffect } from 'react';
import { ListItem } from './components'
import { Progress, TextAction } from "@microsoft/fast-components-react-msft";

import useDarkMode from 'use-dark-mode';
import { DesignSystemProvider } from '@microsoft/fast-jss-manager-react';

import './App.css';

const App = () => {
  const darkMode = useDarkMode();
  const designSystem = {
    backgroundColor: darkMode.value ? '#333' : '#FFF'
  };

  const [downloads, setDownloads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    chrome.downloads.search({state: 'complete', query: searchTerm.split(' ')}, d => {
      setDownloads(d);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <DesignSystemProvider designSystem={designSystem}>
      <TextAction className="m-b-sm"
        appearance="outline"
        placeholder="Search..."
        onChange={event => setSearchTerm(event.target.value)} />

      {isLoading && <Progress />}

      {downloads && downloads.length > 0 && !isLoading && <div>
        {downloads.map(d => <ListItem key={d.id} download={d} />)}
      </div>}
    </DesignSystemProvider>
  );
}
  
export default App;
