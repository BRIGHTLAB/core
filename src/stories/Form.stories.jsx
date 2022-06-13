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
      handleChange={(values) => console.log('changed', values)}
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
        supervisor_obj: {
          value: '13',
          title: 'Nadine Nader',
        },
        permission_obj: false,
        company_obj: {
          value: '2',
          title: 'BRIGHT LAB',
        },
        departments_obj: {
          id: '5',
          value: '5',
          company_id: '2',
          title: 'QA',
        },
        positions_obj: {
          id: '1',
          value: '1',
          templates_id: '1',
          key: 'dev_fe',
          title: 'Frontend developer',
        },
      }}
    />
  );
});
