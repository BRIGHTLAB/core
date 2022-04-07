import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
const IsNumber = (string) => /^[0-9]+$/.test(string);

export default function TextInput({
  id,
  value,
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
}) {
  const [state, setState] = useState(value);

  const onChange = (event) => {
    if (
      type === 'number' &&
      event.target.value &&
      !IsNumber(event.target.value)
    ) {
      return;
    }
    setState(event.target.value);
    handleChange(name, event.target.value);
  };

  return (
    <TextField
      value={state ?? ''}
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
      inputProps={{ maxLength: maxLength ?? 255 }}
      onChange={onChange}
      onBlur={(event) => {
        handleBlur(name, event.target.value);
      }}
    />
  );
}
