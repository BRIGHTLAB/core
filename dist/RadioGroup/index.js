"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Radio_1 = require("@mui/material/Radio");
const RadioGroup_1 = require("@mui/material/RadioGroup");
const FormControlLabel_1 = require("@mui/material/FormControlLabel");
const FormControl_1 = require("@mui/material/FormControl");
const FormLabel_1 = require("@mui/material/FormLabel");
const Typography_1 = require("@mui/material/Typography");
function RadioGroupComp({ value = '', handleChange, label, data, disabled, error, helperText, required, name, }) {
    const [selectValue, setSelectValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setSelectValue(value);
    }, [value]);
    const onChange = (e) => {
        setSelectValue(e.target.value);
        handleChange(name, e.target.value);
    };
    return (<FormControl_1.default disabled={disabled} required={required} component="fieldset">
      <FormLabel_1.default component="legend" error={error}>
        {label}
      </FormLabel_1.default>
      <RadioGroup_1.default row aria-label="gender" name={name} value={selectValue} onChange={onChange}>
        {data === null || data === void 0 ? void 0 : data.map((row, idx) => (<FormControlLabel_1.default key={name + '_' + idx} value={row.value} control={<Radio_1.default />} label={row.title} {...row.attr}/>))}
      </RadioGroup_1.default>
      <Typography_1.default component="p" color={error ? 'error' : 'inherit'}>
        {helperText}
      </Typography_1.default>
    </FormControl_1.default>);
}
exports.default = RadioGroupComp;
