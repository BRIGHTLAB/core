import React, { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';

interface Props {
  value: { [key: string]: boolean };
  handleChange: (name: string, value: any) => void;
  label: string;
  data: Array<{ value: string; title: string; attr: object }>;
  disabled: boolean;
  error: boolean;
  helperText: string;
  required: boolean;
  name: string;
  view: string;
}

export default function CheckBoxComp({
  value = {},
  handleChange,
  label,
  data,
  disabled,
  error,
  helperText,
  required,
  name,
  view = 'flex',
}: Props) {
  const [selectValue, setSelectValue] = useState(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectValue({ ...selectValue, [e.target.name]: e.target.checked });
    handleChange(name, { ...selectValue, [e.target.name]: e.target.checked });
  };

  return (
    <FormControl disabled={disabled} required={required} component="fieldset">
      <FormLabel component="legend" error={error}>
        {label}
      </FormLabel>
      <div style={{ display: view }}>
        {data?.map((row, idx) => (
          <FormControlLabel
            key={name + '_' + idx}
            control={
              <Checkbox
                checked={
                  selectValue ? (selectValue[row.value] ? true : false) : false
                }
                name={JSON.stringify(row.value)}
                onChange={onChange}
              />
            }
            label={row.title}
            {...row.attr}
          />
        ))}
      </div>
      <Typography component="p" color={error ? 'error' : 'inherit'}>
        {helperText}
      </Typography>
    </FormControl>
  );
}
