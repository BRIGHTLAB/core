import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function Select({
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
  name,
}) {
  const [selectValue, setSelectValue] = useState(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (event, newValue) => {
    setSelectValue(newValue);
    handleChange(name, newValue);
  };

  return (
    <Autocomplete
      value={selectValue}
      multiple={multi}
      fullWidth
      options={data}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, val) => option.value == val.value}
      id={id}
      autoComplete
      disabled={disabled}
      includeInputInList
      renderInput={(params) => (
        <TextField
          {...params}
          margin="dense"
          label={label}
          required={required}
          helperText={helperText}
          error={error}
        />
      )}
      size="small"
      onChange={onChange}
    />
  );
}

Select.propTypes = {
  data: PropTypes.array,
  multi: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.any,
  value: PropTypes.string || PropTypes.array,
  name: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  value: null,
};
