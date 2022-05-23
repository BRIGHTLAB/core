import React from 'react';
import { storiesOf } from '@storybook/react';

import List from '../List';

const data = [
  { value: 1, title: 'Amine Amine' },
  { value: 2, title: 'sharbel Mer3eb' },
  { value: 3, title: 'Charles daccache' },
  { value: 4, title: 'Serge Masaad' },
];

const stories = storiesOf('List', module);

stories.add('Empty List', () => {
  return <List dataP={[]} renderItem={(row, idx) => <div></div>} />;
});

stories.add('List', () => {
  return (
    <List dataP={data} renderItem={(row, idx) => <div>{row.title}</div>} />
  );
});
