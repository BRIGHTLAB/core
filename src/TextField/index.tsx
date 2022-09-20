import * as React from 'react';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

const IsNumber = (string: string) => /^[0-9]+$/.test(string);

interface Props {
  id: string;
  value: string;
  name: string;
  type: string;
  helperText: string;
  error: boolean;
  required: boolean;
  handleChange: (name: string, value: any) => void;
  handleBlur: (name: string, value: any) => void;
  label: string;
  disabled: boolean;
  maxLength: number;
  variant?: 'standard' | 'filled' | 'outlined';
  sx: any;
  InputProps: any;
  minRows: number;
}

export default function TextInput({
  id,
  value = '',
  name,
  type = 'text',
  helperText,
  error,
  required,
  handleChange,
  handleBlur,
  label,
  disabled,
  maxLength,
  variant = 'outlined',
  sx,
  InputProps,
  minRows = 4,
}: Props) {
  const [state, setState] = useState(value);

  useEffect(() => {
    if (type.includes('date')) {
      setState(value ? value.substring(0, 10) : value);
    } else {
      setState(value);
    }
  }, [value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && event.target.value && !IsNumber(event.target.value)) {
      return;
    }
    setState(event.target.value);
    handleChange(name, event.target.value);
  };

  return (
    <>
      {type.includes('date') ? label : null}
      <TextField
        value={type.includes('date') ? state : state ? state : ''}
        margin="dense"
        variant={variant}
        id={id}
        size="small"
        name={name}
        disabled={disabled}
        label={type.includes('date') ? undefined : label}
        type={type === 'number' ? 'text' : type}
        helperText={helperText}
        error={error}
        fullWidth
        multiline={type === 'textarea' ? true : false}
        minRows={type === 'textarea' ? minRows : undefined}
        required={required}
        sx={sx}
        InputProps={{ maxLength: `${maxLength}`, ...InputProps }}
        onChange={onChange}
        onBlur={
          handleBlur
            ? (event) => {
                handleBlur(name, event.target.value);
              }
            : undefined
        }
      />
    </>
  );
}
