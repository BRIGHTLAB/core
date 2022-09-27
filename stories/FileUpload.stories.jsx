import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import FileUpload from '../src/FileUpload';

const stories = storiesOf('File Upload', module);

stories.add('Image', () => {
  return (
    <FileUpload
      // uploadType="file"
      name="image"
      handleChange={(name, value) => console.log(name, value)}
      value="https://picsum.photos/200/300"
    />
  );
});

stories.add('video', () => {
  return <FileUpload handleChange={() => {}} type="video" />;
});

stories.add('audio', () => {
  return <FileUpload handleChange={() => {}} type="audio" />;
});

stories.add('Allow URL', () => {
  const [state, setState] = useState('');
  return <FileUpload handleChange={(e) => setState(e.target.value)} type="video" allowURL value={state} />;
});
