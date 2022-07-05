"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FormControlLabel_1 = require("@mui/material/FormControlLabel");
const FormControl_1 = require("@mui/material/FormControl");
const FormLabel_1 = require("@mui/material/FormLabel");
const Typography_1 = require("@mui/material/Typography");
const material_1 = require("@mui/material");
function CheckBoxComp({ value = {}, handleChange, label, data, disabled, error, helperText, required, name, view = 'flex', }) {
    const [selectValue, setSelectValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setSelectValue(value);
    }, [value]);
    const onChange = (e) => {
        setSelectValue(Object.assign(Object.assign({}, selectValue), { [e.target.name]: e.target.checked }));
        handleChange(name, Object.assign(Object.assign({}, selectValue), { [e.target.name]: e.target.checked }));
    };
    return (<FormControl_1.default disabled={disabled} required={required} component="fieldset">
      <FormLabel_1.default component="legend" error={error}>
        {label}
      </FormLabel_1.default>
      <div style={{ display: view }}>
        {data === null || data === void 0 ? void 0 : data.map((row, idx) => (<FormControlLabel_1.default key={name + '_' + idx} control={<material_1.Checkbox checked={selectValue ? (selectValue[row.value] ? true : false) : false} name={JSON.stringify(row.value)} onChange={onChange}/>} label={row.title} {...row.attr}/>))}
      </div>
      <Typography_1.default component="p" color={error ? 'error' : 'inherit'}>
        {helperText}
      </Typography_1.default>
    </FormControl_1.default>);
}
exports.default = CheckBoxComp;
