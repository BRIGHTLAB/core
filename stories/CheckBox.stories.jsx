import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from '../src/CheckBox';
const data = [
  { value: 1, title: 'Amine Amine' },
  { value: 2, title: 'sharbel Mer3eb' },
  { value: 3, title: 'Charles daccache' },
  { value: 4, title: 'Serge Masaad' },
];

const stories = storiesOf('CheckBox', module);

stories.add('CheckBox', () => {
  return (
    <CheckBox
      value={{ ['1']: true }}
      handleChange={(name, value) => {}}
      data={data}
      required={true}
      error={true}
      name="checkbox1"
      helperText="hello there click on a checkbox or more"
      label="Checkboxes"
    />
  );
});

stories.add('checkbox grid', () => {
  return (
    <CheckBox
      handleChange={(name, value) => {}}
      data={data}
      required={true}
      error={true}
      name="checkbox2"
      helperText="hello there click on a checkbox or more"
      label="Checkboxes"
      view="grid"
    />
  );
});
