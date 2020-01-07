/*global chrome*/

import React, { useState, useEffect } from 'react';
import { Label, Card, Image } from '@microsoft/fast-components-react-msft';

const ListItem = (props) => {
  const [fileIconUrl, setFileIconUrl] = useState('');

  useEffect(() => {
    chrome.downloads.getFileIcon(props.download.id,
      {},
      iconUrl => setFileIconUrl(iconUrl));
  }, []);

  return (<>
    <Card style={{ margin: '8px 0px', padding: '8px' }}>
      <Image src={fileIconUrl} />
      <Label>
        {props.download.filename.split('\\').pop()}
      </Label>
    </Card>
  </>);
}

export default ListItem;