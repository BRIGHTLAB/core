import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from '../src/CheckBox';
const attr = { xs: 12, md: 4, lg: 3 };
const data = [
  {
    title: '1',
    value: 1,
    attr: attr,
  },
  {
    title: 'Adobe After Effects',
    value: 'Adobe_After_Effects',
    attr: attr,
  },
  {
    title: 'Adobe Photoshop',
    value: 'Adobe Photoshop',
    attr: attr,
  },
  {
    title: 'Microsoft Excel',
    value: 'Microsoft Excel',
    attr: attr,
  },
  {
    title: 'Adobe Flash',
    value: 'Adobe Flash',
    attr: attr,
  },
  {
    title: 'AutoCAD',
    value: 'AutoCAD',
    attr: attr,
  },
  {
    title: 'Microsoft Word',
    value: 'Microsoft Word',
    attr: attr,
  },
  {
    title: 'Adobe Fireworks',
    value: 'Adobe Fireworks',
    attr: attr,
  },
  {
    title: 'Cinema 4D',
    value: 'Cinema 4D',
    attr: attr,
  },
  {
    title: 'Microsoft Outlook',
    value: 'Microsoft Outlook',
    attr: attr,
  },
  {
    title: 'Adobe Illustrator',
    value: 'Adobe Illustrator',
    attr: attr,
  },
  {
    title: 'DVR',
    value: 'DVR',
    attr: attr,
  },
  {
    title: 'Microsoft PowerPoint',
    value: 'Microsoft PowerPoint',
    attr: attr,
  },
  {
    title: 'Adobe InDesign',
    value: 'Adobe InDesign',
    attr: attr,
  },
  {
    title: 'Maya',
    value: 'Maya',
    attr: attr,
  },
  {
    title: '3ds Max',
    value: '3ds Max',
    attr: attr,
  },
];

const stories = storiesOf('CheckBox', module);

stories.add('CheckBox', () => {
  return (
    <CheckBox
      view="grid"
      value={{ ['Maya']: true }}
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
