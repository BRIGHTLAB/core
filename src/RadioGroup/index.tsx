import * as React from 'react';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';

interface Props {
  value?: string;
  handleChange: (name: string, value: any) => void;
  label?: string;
  data: { value: string | number; title: string; attr?: object; radioStyle?: object }[];
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  name: string;
}

export default function RadioGroupComp({
  value = '',
  handleChange,
  label,
  data,
  disabled,
  error,
  helperText,
  required,
  name,
}: Props) {
  const [selectValue, setSelectValue] = useState(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectValue(e.target.value);
    handleChange(name, e.target.value);
  };

  return (
    <FormControl disabled={disabled} required={required} component="fieldset">
      {label ? (
        <FormLabel component="legend" error={error}>
          {label}
        </FormLabel>
      ) : (
        <></>
      )}
      <RadioGroup row aria-label="gender" name={name} value={selectValue} onChange={onChange}>
        {data?.map((row, idx) => (
          <FormControlLabel
            key={name + '_' + idx}
            value={row.value}
            control={<Radio sx={row.radioStyle} />}
            label={row.title}
            {...row.attr}
          />
        ))}
      </RadioGroup>
      <Typography component="p" color={error ? 'error' : 'inherit'}>
        {helperText}
      </Typography>
    </FormControl>
  );
}
