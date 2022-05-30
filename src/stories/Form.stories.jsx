import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

const stories = storiesOf('Form', module);

const fields = [
  {
    id: 'full_name',
    name: 'full_name',
    type: 'TextField',
    label: 'Full Name',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'email',
    name: 'email',
    type: 'TextField',
    label: 'Email',
    inputType: 'email',
    helperText: 'Please enter a valid email',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'image_url',
    name: 'image_url',
    type: 'FileUpload',
    label: 'Image',
    inputType: 'image',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'deactivated',
    name: 'deactivated',
    type: 'RadioGroup',
    label: 'Active',
    required: true,
    data: [
      { value: '0', title: 'Yes' },
      { value: '1', title: 'No' },
    ],
    grid: {
      xs: 12,
      md: 6,
    },
  },
];

stories.add('Init', () => {
  return (
    <Form
      fields={fields}
      handleChange={(values) => console.log('changed', values)}
      customComponents={[
        {
          type: 'custom',
          renderItem: (item) => <p>{item.title}</p>,
        },
      ]}
    />
  );
});
