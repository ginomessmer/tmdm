/*global chrome*/

import React, { useState, useEffect } from 'react';
import { ListItem } from './components'
import { Button, ButtonAppearance, Heading, Divider } from "@microsoft/fast-components-react-msft";

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
      <Heading tag={"h1"} size={5}>Downloads</Heading>
      <Divider />
      {downloads && downloads.length > 0 && <div>
        {downloads.map(d => <ListItem key={d.id} download={d} />)}
      </div>}
    </>
  );
}
  
export default App;
