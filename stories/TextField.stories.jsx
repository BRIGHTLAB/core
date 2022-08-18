import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';

import TextField from '../src/TextField';

const stories = storiesOf('Text Field', module);

stories.add('Text', () => {
  const [state, setState] = useState();

  useEffect(() => {
    setTimeout(() => setState('Test valuue'), 1000);
  }, []);
  return <TextField value={state} handleChange={() => {}} label="Text" />;
});

stories.add('Text Area', () => {
  return <TextField handleChange={() => {}} label="Text Area" type="textarea" />;
});

stories.add('Number', () => {
  return <TextField handleChange={() => {}} label="Text Area" type="number" />;
});

stories.add('Text + Max Length', () => {
  return <TextField handleChange={() => {}} label="Text" maxLength={20} />;
});

stories.add('Date', () => {
  return <TextField handleChange={() => {}} value="2022-12-12 12:12:12" label="Text" type="date" maxLength={20} />;
});
