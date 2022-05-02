import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Form';

const stories = storiesOf('Form', module);

let fields = [
  {
    id: "123",
    name: "country",
    type: 'Select',
    label: "Country",
    helperText: "Country of origin",
    grid:{
      xs: 12,
      md: 6,
    },
    data: [
      {
        title: "Male",
        value: "male",
      },
      {
        title: "Female",
        value: "female",
      },
      {
        title: "Hetero",
        value: "Hetero",
      },
    ],
  },
  {
    id: "asdasd",
    name: "phone",
    label: "Phone",
    type: 'TextField',
    placeholder: "Phone Number",
    helperText: "Emergency phone number",
    required: true,
    grid:{
      xs: 12,
      md: 6,
    }
  },
  {
    type: 'custom',
    title: 'charles',
    grid:{
      xs: 12,
      md: 6,
    }
  }
];


stories.add('Init', () => {
  return <Form 
    fields={fields} 
    handleChange={(values) => console.log("changed", values)} 
    customComponents={[
      {
        type: "custom",
        renderItem: (item)=> <p>{item.title}</p>
      }
    ]}
    />;
});