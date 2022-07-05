"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TextField_1 = require("@mui/material/TextField");
const IsNumber = (string) => /^[0-9]+$/.test(string);
function TextInput({ id, value = '', name, type, helperText, error, required, handleChange, handleBlur, label, disabled, maxLength, }) {
    const [state, setState] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setState(value);
    }, [value]);
    const onChange = (event) => {
        if (type === 'number' &&
            event.target.value &&
            !IsNumber(event.target.value)) {
            return;
        }
        setState(event.target.value);
        handleChange(name, event.target.value);
    };
    return (<TextField_1.default value={state} margin="dense" id={id} size="small" name={name} disabled={disabled} label={label} type={type === 'number' ? 'text' : type} helperText={helperText} error={error} fullWidth multiline={type === 'textarea' ? true : false} minRows={type === 'textarea' ? 4 : undefined} required={required} inputProps={{ maxLength: maxLength }} onChange={onChange} onBlur={handleBlur
            ? (event) => {
                handleBlur(name, event.target.value);
            }
            : undefined}/>);
}
exports.default = TextInput;
