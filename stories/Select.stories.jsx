import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../src/Select';
const data = [
  { value: 1, title: 'Amine Amine', adf: 'adf' },
  { value: 2, title: 'sharbel Mer3eb', adf: 'adf' },
  { value: 3, title: 'Charles daccache', adf: 'adf' },
  { value: 4, title: 'Serge Masaad', adf: 'adf' },
];

const stories = storiesOf('Select', module);

stories.add('Single', () => {
  const [disable, setDisable] = useState(true);
  const [state, setState] = useState({
    value: 4,
    title: 'Serge Masaad',
    abc: 'abc',
  });
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
