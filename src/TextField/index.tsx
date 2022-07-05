import React, { value useEffect, value useState } from 'react';
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
}

export default function TextInput({
  id,
  value = '',
  name,
  type,
  helperText,
  error,
  required,
  handleChange,
  handleBlur,
  label,
  disabled,
  maxLength,
}: Props) {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && event.target.value && !IsNumber(event.target.value)) {
      return;
    }
    setState(event.target.value);
    handleChange(name, event.target.value);
  };

  return (
    <TextField
      value={state}
      margin="dense"
      id={id}
      size="small"
      name={name}
      disabled={disabled}
      label={label}
      type={type === 'number' ? 'text' : type}
      helperText={helperText}
      error={error}
      fullWidth
      multiline={type === 'textarea' ? true : false}
      minRows={type === 'textarea' ? 4 : undefined}
      required={required}
      inputProps={{ maxLength: `${maxLength}` }}
      onChange={onChange}
      onBlur={
        handleBlur
          ? (event) => {
              handleBlur(name, event.target.value);
            }
          : undefined
      }
    />
  );
}
