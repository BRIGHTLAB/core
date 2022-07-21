import { Delete } from '@mui/icons-material';
import { FormControlLabel, Grid, Radio, RadioGroup, TextField, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Dashboard, useUppy } from '@uppy/react';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';

interface Props {
  value: string;
  name: string;
  handleChange: (value: any) => void;
  type: string;
  grid: object;
  id: any;
  error: boolean;
  label: string;
  required: boolean;
  allowURL: boolean;
  disabled: boolean;
  lang: string;
  Get: (url: string, lang: string) => Promise<{ signedUrl: string }>;
}

export default function FileUpload({
  value,
  name,
  handleChange,
  type = 'image',
  grid,
  id,
  error,
  label,
  required,
  allowURL,
  disabled,
  lang = 'en',
  Get,
}: Props) {
  const [URL, setURL] = useState('false');
  const [state, setState] = useState(value);

  let fileTypes: string[] = [];

  switch (type) {
    case 'image':
      fileTypes = ['.jpg', '.jpeg', '.png'];
      break;
    case 'video':
      fileTypes = ['.mp4'];
      break;
    case 'audio':
      fileTypes = ['.m4a', '.flac', '.mp3', '.wav', '.wma', '.acc'];
      break;
    default:
      fileTypes = ['.jpg', '.jpeg', '.png'];
  }

  const uppy = useUppy(() => {
    return new Uppy({
      id: name,
      autoProceed: true,
      restrictions: {
        maxFileSize: type === 'image' ? 500000 : undefined, //500kb
        maxNumberOfFiles: 1,
        allowedFileTypes: fileTypes,
      },
    })
      .use(AwsS3, {
        // fields: [], // empty array
        async getUploadParameters(file): Promise<any> {
          const response = await Get(`sign_url?objectName=${file.name}`, lang);

          return {
            method: 'PUT',
            url: response.signedUrl,
            fields: [],
          };
        },
      })
      .on('complete', (result) => {
        if (result.successful.length > 0) {
          // add the file to the main postData array
          const obj = result.successful[0];
          const filename = obj.uploadURL.split('/').pop();

          onChange(filename);
        } else {
          console.log('Upload error: ', result.failed); // if upload failed, let's see what went wrong
        }
      })
      .on('file-removed', () => {
        onChange('');
      });
  });

  const changeUploadType = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange('');
    setURL(e.target.value);
  };

  const onChange = (value: string | undefined) => setState(value ?? '');

  useEffect(() => {
    setState(value);
  }, [value]);

  useEffect(() => {
    handleChange({ target: { name: name, value: state } });
  }, [state, name]);

  return (
    <Grid item {...grid} key={id}>
      <span
        style={{
          color: error ? '#ff1744' : 'gray',
        }}
      >
        {label} {required ? <span className="required">*</span> : ''}
      </span>
      {state && state.includes('https://') ? (
        <Grid container>
          <Grid item xs={12} style={{ paddingTop: '2px', display: 'flex' }}>
            <Tooltip title="Delete">
              <Delete
                style={{ color: '#f23729', cursor: 'pointer' }}
                onClick={() => {
                  onChange('');
                }}
              />
            </Tooltip>
            {type == 'image' ? (
              <img width={400} height={300} src={state} alt={state} placeholder="blur" />
            ) : (
              <a href={state} target="_blank">
                {state}
              </a>
            )}
          </Grid>
        </Grid>
      ) : (
        <>
          {allowURL && (
            <RadioGroup row aria-label="Upload type" name="URL" value={URL} onChange={changeUploadType}>
              <FormControlLabel value="false" control={<Radio />} label="File Upload" />
              <FormControlLabel value="true" control={<Radio />} label="Url" />
            </RadioGroup>
          )}
          {URL === 'true' ? (
            <TextField
              size="small"
              value={state ?? ''}
              id={id}
              name={name}
              disabled={disabled}
              type="text"
              error={error}
              fullWidth
              required={required}
              inputProps={{ maxLength: 255 }}
              label="Url"
              onChange={handleChange}
            />
          ) : (
            <Dashboard
              uppy={uppy}
              showRemoveButtonAfterComplete={true}
              hideProgressAfterFinish={true}
              height={400}
              width="100%"
            />
          )}
        </>
      )}
    </Grid>
  );
}
