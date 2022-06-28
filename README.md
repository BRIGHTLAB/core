<!-- markdownlint-disable-next-line -->
<p align="center">
<img src="https://bright-lab.s3.eu-west-1.amazonaws.com/bl_icon.png" alt="Bright Lab logo">
</p>
<br>

<h1 align="center">Bright Lab Core</h1>

**Bright Lab Core** contains foundational React UI component libraries for shipping new features faster and it is based on <a href="https://mui.com/" target="_blank">Material UI</a> and will be including some BRIGHT components.

- [_Material UI_](https://mui.com/material-ui/getting-started/overview/) is a comprehensive library of components that features our implementation of Google's [Material Design](https://material.io/design/introduction/) system.

<div align="center">

[![npm downloads](https://img.shields.io/npm/dy/@bright-lab/core.svg)](https://www.npmjs.com/package/@bright-lab/core)
[![minizipped size](https://img.shields.io/bundlephobia/minzip/@bright-lab/core)](https://bundlephobia.com/package/@bright-lab/core)
[![npm latest package](https://img.shields.io/npm/v/@bright-lab/core/latest.svg)](https://www.npmjs.com/package/@mui/material)

</div>

## Installation

### @bright-lab/core

@bright-lab/core is available as an [npm package](https://www.npmjs.com/package/@bright-lab/core).

```sh
// with npm
npm install @bright-lab/core

// with yarn
yarn add @bright-lab/core
```

**Note**: @bright-lab/core is still in alpha.
We are adding new components regularly and updating exisitng ones. You're welcome to contribute!

## Getting started with @bright-lab/core

Here is an example of a basic app using @bright-lab/core's `Form` component:

```jsx
import * as React from 'react';
import { Form } from '@bright-lab/core';

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
];

function App() {
  return (
    <Form
      fields={fields}
      errorValues={{}}
      handleChange={(values) => console.log('changed', values)}
      defaultValues={{}}
    />
  );
}
```

## Changelog

The [changelog](https://github.com/BRIGHTLAB/core/releases) is regularly updated to reflect what's changed in each new release.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
