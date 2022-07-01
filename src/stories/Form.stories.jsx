import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

const stories = storiesOf('Form', module);

let fields = [
  {
    id: 'full_name',
    name: 'full_name',
    label: 'Full Name',
    type: 'TextField',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'TextField',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'image_url',
    name: 'image_url',
    label: 'Image',
    type: 'FileUpload',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
  },
  {
    id: 'deactivated',
    name: 'deactivated',
    label: 'Deactivated',
    type: 'RadioGroup',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: '0',
      },
      {
        title: 'No',
        value: '1',
      },
    ],
  },
  {
    id: 'testing',
    name: 'testing',
    label: 'Testing',
    type: 'CheckBox',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: 0,
      },
      {
        title: 'No',
        value: 1,
      },
    ],
  },
  {
    id: 'company_obj',
    name: 'company_obj',
    label: 'Company',
    type: 'Select',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: '0',
      },
      {
        title: 'No',
        value: '1',
      },
    ],
  },
  {
    id: 'departments_obj',
    name: 'departments_obj',
    label: 'Department',
    type: 'Select',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: '0',
      },
      {
        title: 'No',
        value: '1',
      },
    ],
  },
  {
    id: 'positions_obj',
    name: 'positions_obj',
    label: 'Position',
    type: 'Select',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: '0',
      },
      {
        title: 'No',
        value: '1',
      },
    ],
  },
  {
    id: 'supervisor_obj',
    name: 'supervisor_obj',
    label: 'Supervisor',
    type: 'Select',
    required: true,
    grid: {
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: 'Yes',
        value: '0',
      },
      {
        title: 'No',
        value: '1',
      },
    ],
  },
];

stories.add('Init', () => {
  return (
    <Form
      fields={fields}
      onChange={(values) => {}}
      defaultValues={{
        id: '14',
        roles_id: '1',
        departments_id: '5',
        positions_id: '1',
        full_name: 'Sara Soboh',
        email: 'ssoboh@bright-lab.com',
        image_url: 'https://static.mirsad.app/no-profile-picture.webp',
        total_points: '0',
        deactivated: '0',
        testing: { 0: true },
        supervisor_obj: {
          title: 'Yes',
          value: '0',
        },
        permission_obj: false,
        company_obj: {
          title: 'Yes',
          value: '0',
        },
        departments_obj: {
          title: 'Yes',
          value: '0',
        },
        positions_obj: {
          title: 'Yes',
          value: '0',
        },
      }}
    />
  );
});

stories.add('Add', () => {
  return (
    <Form
      fields={fields}
      errorValues={{}}
      onChange={(values) => {}}
      defaultValues={{}}
    />
  );
});
