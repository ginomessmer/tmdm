/*global chrome*/

import React, { useState, useEffect } from 'react';

import { Label, Card, Image, Hypertext } from '@microsoft/fast-components-react-msft';
import Button from '@microsoft/fast-components-react-msft/dist/button/button';
import Metatext from '@microsoft/fast-components-react-msft/dist/metatext/metatext';

import './list-item.scss';

const ListItem = (props) => {
  const [fileIconUrl, setFileIconUrl] = useState('');

  useEffect(() => {
    chrome.downloads.getFileIcon(props.download.id,
      {},
      iconUrl => setFileIconUrl(iconUrl));
  }, []);

  return (<>
    <Card className="download-item" id={props.download.id} onClick={() => chrome.downloads.open(props.download.id)}>
      <Image className="icon" src={fileIconUrl} />

      <div className="meta">
        <Label>
          {props.download.filename.split('\\').pop()}
        </Label>
        <Label className="small">
          {props.download.filename}
        </Label>
        <Hypertext className="small" onClick={() => chrome.downloads.show(props.download.id)} href="#">
          Open folder...
        </Hypertext>
      </div>
    </Card>
  </>);
}

export default ListItem;