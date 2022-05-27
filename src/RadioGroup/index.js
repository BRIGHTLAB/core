import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';

export default function RadioGroupComp({
  value,
  handleChange,
  label,
  data,
  disabled,
  error,
  helperText,
  required,
  name,
}) {
  const [selectValue, setSelectValue] = useState(value ?? '');

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (e) => {
    setSelectValue(e.target.value);
    handleChange(name, e.target.value);
  };

  return (
    <FormControl disabled={disabled} required={required} component="fieldset">
      <FormLabel component="legend" error={error}>
        {label}
      </FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name={name}
        value={selectValue}
        onChange={onChange}
      >
        {data?.map((row, idx) => (
          <FormControlLabel
            key={name + '_' + idx}
            value={row.value}
            control={<Radio />}
            label={row.title}
            {...row.extra}
          />
        ))}
      </RadioGroup>
      <Typography variant="p" color={error ? 'error' : 'inherit'}>
        {helperText}
      </Typography>
    </FormControl>
  );
}

RadioGroupComp.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

RadioGroupComp.defaultProps = {
  value: '',
};
