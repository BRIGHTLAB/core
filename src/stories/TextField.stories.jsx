import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from '../TextField';

const stories = storiesOf('Text Field', module);

stories.add('Text', () => {
  return <TextField handleChange={() => {}} label="Text" />;
});

stories.add('Text Area', () => {
  return (
    <TextField handleChange={() => {}} label="Text Area" type="textarea" />
  );
});

stories.add('Number', () => {
  return <TextField handleChange={() => {}} label="Text Area" type="number" />;
});
