/*global chrome*/

import React, { useState, useEffect } from 'react';
import { ListItem } from './components'
import { Button, ButtonAppearance } from "@microsoft/fast-components-react-msft";

import './App.css';

const App = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    chrome.downloads.search({}, d => {
      setDownloads(d);
    });
  }, []);

  return (
    <>
      {downloads && downloads.length > 0 && <div>
        {downloads.map(d => <ListItem key={d.id} download={d} />)}
      </div>}
    </>
  );
}
  
export default App;
