import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../Select';
const data = [
  { value: 1, title: 'abc' },
  { value: 2, title: 'def' },
];

const stories = storiesOf('Select', module);

stories.add('Single', () => {
  return <Select handleChange={() => {}} data={data} label="Single" />;
});

stories.add('Multi', () => {
  return <Select handleChange={() => {}} data={data} label="Single" multi />;
});
