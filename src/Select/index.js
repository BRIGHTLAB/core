import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function SelectComp({
  id,
  value,
  handleChange,
  label,
  data,
  multi,
  disabled,
  error,
  helperText,
  required,
}) {
  const [selectValue, setSelectValue] = useState(value ?? '');

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (event, newValue) => {
    setSelectValue(newValue);
    handleChange(newValue);
  };
  return (
    <Autocomplete
      selectValue={selectValue}
      multiple={multi}
      fullWidth
      options={data}
      getOptionLabel={(option) => (option.title ? option.title : '(No Title)')}
      getOptionSelected={(option, val) => option.selectValue == val.selectValue}
      id={id}
      autoComplete
      disabled={disabled}
      includeInputInList
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          margin="normal"
          helperText={helperText}
          error={error}
        />
      )}
      size="small"
      onChange={onChange}
    />
  );
}
