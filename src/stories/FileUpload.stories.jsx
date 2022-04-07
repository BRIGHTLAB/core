import React from 'react';
import { storiesOf } from '@storybook/react';

import FileUpload from '../FileUpload';

const stories = storiesOf('File Upload', module);

stories.add('Image', () => {
  return <FileUpload handleChange={() => {}} />;
});

stories.add('video', () => {
  return <FileUpload handleChange={() => {}} type="video" />;
});

stories.add('audio', () => {
  return <FileUpload handleChange={() => {}} type="audio" />;
});
