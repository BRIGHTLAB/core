import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from '../src/CheckBox';
const attr = { xs: 12, md: 4, lg: 3 };
const data = [
  { value: 1, title: 'Amine Amine', attr: attr },
  { value: 2, title: 'sharbel Mer3eb', attr: attr },
  { value: 3, title: 'Charles daccache', attr: attr },
  { value: 4, title: 'Serge Masaad', attr: attr },
  { value: 5, title: 'sharbel Mer3eb', attr: attr },
  { value: 6, title: 'Charles daccache', attr: attr },
  { value: 7, title: 'Serge Masaadsdsdsdsd', attr: attr },
  { value: 5, title: 'sharbel Mer3ebaa', attr: attr },
  { value: 6, title: 'Charles', attr: attr },
  { value: 7, title: 'Serge Masaad', attr: attr },
];

const stories = storiesOf('CheckBox', module);

stories.add('CheckBox', () => {
  return (
    <CheckBox
      view="grid"
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
