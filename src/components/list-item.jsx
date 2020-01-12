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

  const openDownload = (id) => chrome.downloads.open(id);
  const openFolder = (id) => chrome.downloads.show(id);

  return (<>
    <Card id={props.download.id}
      className="download-item"
      title={props.download.url}>

      <Image className="icon" src={fileIconUrl} />

      <div className="meta">
        <div onClick={() => openDownload(props.download.id)}>
          <Label>
            {props.download.filename.split('\\').pop()}
          </Label>
          <Label className="small">
            {props.download.filename}
          </Label>
        </div>

        <Hypertext className="small" onClick={() => openFolder(props.download.id)} href={`#${props.download.id}`}>
          Open folder...
        </Hypertext>
      </div>
    </Card>
  </>);
}

export default ListItem;