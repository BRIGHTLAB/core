import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Popup from '../Popup';

const stories = storiesOf('Popup', module);

stories.add('Popup', () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>open modal</button>
      <Popup open={open} closeModal={() => setOpen(false)} width="800px">
        abc
      </Popup>
    </div>
  );
});
