import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

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

  useEffect(() => {
    setState(value);
  }, [value]);

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
      value={state ? state : ''}
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
      inputProps={{ maxLength: maxLength }}
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

TextInput.propTypes = {
  id: PropTypes.any,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
};

TextInput.defaultProps = { value: '' };
