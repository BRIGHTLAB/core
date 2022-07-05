"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Autocomplete_1 = require("@mui/material/Autocomplete");
const TextField_1 = require("@mui/material/TextField");
function Select({ id, value, handleChange, label, data, multi, disabled, error, helperText, required, name, }) {
    const [selectValue, setSelectValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setSelectValue(value);
    }, [value]);
    const onChange = (event, newValue //any cause its complicated
    ) => {
        setSelectValue(newValue);
        handleChange(name, newValue);
    };
    return (<Autocomplete_1.default value={multi && !selectValue ? [] : selectValue} multiple={multi} fullWidth options={data} getOptionLabel={(option) => option.title} isOptionEqualToValue={(option, val) => option.value === val.value} id={id} autoComplete disabled={disabled} includeInputInList renderInput={(params) => (<TextField_1.default {...params} margin="dense" label={label} required={required} helperText={helperText} error={error}/>)} size="small" onChange={onChange}/>);
}
exports.default = Select;
