import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import RadioGroup from '../RadioGroup';
const data = [
  { value: 1, title: 'Amine Amine' },
  { value: 2, title: 'sharbel Mer3eb' },
  { value: 3, title: 'Charles daccache' },
  { value: 4, title: 'Serge Masaad' },
];

const stories = storiesOf('RadioGroup', module);

stories.add('RadioGroup', () => {
  return (
    <RadioGroup
      handleChange={() => {}}
      data={data}
      required={true}
      error={true}
      helperText="hello there click on a radio"
      label="Radio"
    />
  );
});
