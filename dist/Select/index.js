"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var TextField_1 = require("@mui/material/TextField");
function Select(_a) {
    var id = _a.id, value = _a.value, handleChange = _a.handleChange, label = _a.label, data = _a.data, multi = _a.multi, disabled = _a.disabled, error = _a.error, helperText = _a.helperText, required = _a.required, name = _a.name;
    var _b = (0, react_1.useState)(value), selectValue = _b[0], setSelectValue = _b[1];
    (0, react_1.useEffect)(function () {
        setSelectValue(value);
    }, [value]);
    var onChange = function (event, newValue) {
        setSelectValue(newValue);
        handleChange(name, newValue);
    };
    return (React.createElement(Autocomplete_1.default, { value: multi && !selectValue ? [] : selectValue, multiple: multi, fullWidth: true, options: data, getOptionLabel: function (option) { return option.title; }, isOptionEqualToValue: function (option, val) { return option.value === val.value; }, id: id, autoComplete: true, disabled: disabled, includeInputInList: true, renderInput: function (params) { return (React.createElement(TextField_1.default, __assign({}, params, { margin: "dense", label: label, required: required, helperText: helperText, error: error }))); }, size: "small", onChange: onChange }));
}
exports.default = Select;
