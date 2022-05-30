import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../Select';
const data = [
  { value: 1, title: 'Amine Amine' },
  { value: 2, title: 'sharbel Mer3eb' },
  { value: 3, title: 'Charles daccache' },
  { value: 4, title: 'Serge Masaad' },
];

const stories = storiesOf('Select', module);

stories.add('Single', () => {
  const [disable, setDisable] = useState(true);
  const [state, setState] = useState(null);
  return (
    <>
      <button onClick={() => setDisable(!disable)}>toggle disable</button>
      <Select
        value={state}
        handleChange={(name, value) => setState(value)}
        data={data}
        label="Single"
        disabled={disable}
      />
    </>
  );
});

stories.add('Multi', () => {
  return <Select handleChange={() => {}} data={data} label="Multiline" multi />;
});
