import React, { value useEffect, value useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface FilmOptionType {
  value: string;
  title: string;
  attr?: object;
}

interface Props {
  id: string;
  value: FilmOptionType | null;
  handleChange: (name: string, value: any) => void;
  label: string;
  data: FilmOptionType[];
  multi: boolean;
  disabled: boolean;
  error: boolean;
  helperText: string;
  required: boolean;
  name: string;
}

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
}: Props) {
  const [selectValue, setSelectValue] = useState<FilmOptionType | null>(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (
    event: React.SyntheticEvent,
    newValue: FilmOptionType | null | any, //any cause its complicated
  ) => {
    setSelectValue(newValue);
    handleChange(name, newValue);
  };

  return (
    <Autocomplete
      value={multi && !selectValue ? [] : selectValue}
      multiple={multi}
      fullWidth
      options={data}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      id={id}
      autoComplete
      disabled={disabled}
      includeInputInList
      renderInput={(params) => (
        <TextField {...params} margin="dense" label={label} required={required} helperText={helperText} error={error} />
      )}
      size="small"
      onChange={onChange}
    />
  );
}
