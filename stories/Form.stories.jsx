import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../src/Form';

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
    id: 'full_name',
    name: 'full_name',
    label: 'Full Name',
    type: 'Custom1',
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
const arrayFields = [
  {
    id: 'school',
    name: 'school',
    label: 'School',
    type: 'Array',
    required: true,
    helperText: 'Please specify the highest degree that you have reached',
    data: [
      {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'degree',
        name: 'degree',
        label: 'Degree',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'major',
        name: 'major',
        label: 'Major',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'from',
        name: 'from',
        label: 'From',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'to',
        name: 'to',
        label: '/ To',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'complete',
        name: 'complete',
        label: 'Complete',
        type: 'RadioGroup',
        required: true,
        data: [
          { value: 'Yes', title: 'Yes' },
          { value: 'No', title: 'No' },
        ],
        grid: {
          xs: 12,
        },
      },
    ],
  },
  {
    id: 'university',
    name: 'university',
    label: 'University',
    type: 'Array',
    required: true,
    data: [
      {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'degree',
        name: 'degree',
        label: 'Degree',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'major',
        name: 'major',
        label: 'Major',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'from',
        name: 'from',
        label: 'From',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'to',
        name: 'to',
        label: '/ To',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'complete',
        name: 'complete',
        label: 'Complete',
        type: 'RadioGroup',
        required: true,
        data: [
          { value: 'Yes', title: 'Yes' },
          { value: 'No', title: 'No' },
        ],
        grid: {
          xs: 12,
        },
      },
    ],
  },
  {
    id: 'training_center',
    name: 'training_center',
    label: 'TRAINING CENTER',
    type: 'Array',
    required: true,
    data: [
      {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'degree',
        name: 'degree',
        label: 'Degree',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'major',
        name: 'major',
        label: 'Major',
        type: 'TextField',
        required: true,
        grid: {
          xs: 12,
          md: 6,
        },
      },
      {
        id: 'from',
        name: 'from',
        label: 'From',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'to',
        name: 'to',
        label: '/ To',
        type: 'TextField',
        inputType: 'date',
        required: true,
        grid: {
          xs: 12,
          md: 6,
          lg: 9,
        },
      },
      {
        id: 'complete',
        name: 'complete',
        label: 'Complete',
        type: 'RadioGroup',
        required: true,
        data: [
          { value: 'Yes', title: 'Yes' },
          { value: 'No', title: 'No' },
        ],
        grid: {
          xs: 12,
        },
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
  return <Form fields={fields} errorValues={{}} onChange={(values) => {}} defaultValues={{}} />;
});

stories.add('CustomComponents', () => {
  return (
    <Form
      fields={fields}
      errorValues={{}}
      onChange={(values) => {}}
      defaultValues={{}}
      customComponents={[
        {
          type: 'Custom1',
          renderItem: (row) => (
            <div>
              <h3>
                <b>POSITION DESIRED *</b>
              </h3>
              <div>(Please specify what is the position(s) that will satisfy your career plan)</div>
              <br></br>
              <h4>
                <b>1st priority</b>
              </h4>
            </div>
          ),
        },
      ]}
    />
  );
});

stories.add('Type array', () => {
  return (
    <Form
      fields={arrayFields}
      errorValues={{}}
      onChange={(values) => console.log('values', values)}
      defaultValues={{}}
    />
  );
});
