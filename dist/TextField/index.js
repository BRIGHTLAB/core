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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var IsNumber = function (string) { return /^[0-9]+$/.test(string); };
function TextInput(_a) {
    var id = _a.id, _b = _a.value, value = _b === void 0 ? '' : _b, name = _a.name, _c = _a.type, type = _c === void 0 ? 'text' : _c, helperText = _a.helperText, error = _a.error, required = _a.required, handleChange = _a.handleChange, handleBlur = _a.handleBlur, label = _a.label, disabled = _a.disabled, maxLength = _a.maxLength, _d = _a.variant, variant = _d === void 0 ? 'outlined' : _d, sx = _a.sx, InputProps = _a.InputProps, _e = _a.minRows, minRows = _e === void 0 ? 4 : _e;
    var _f = (0, react_1.useState)(value), state = _f[0], setState = _f[1];
    (0, react_1.useEffect)(function () {
        if (type.includes('date')) {
            setState(value ? value.substring(0, 10) : value);
        }
        else {
            setState(value);
        }
    }, [value]);
    var onChange = function (event) {
        if (type === 'number' && event.target.value && !IsNumber(event.target.value)) {
            return;
        }
        setState(event.target.value);
        handleChange(name, event.target.value);
    };
    return (React.createElement(React.Fragment, null,
        type.includes('date') ? label : null,
        React.createElement(TextField_1.default, { value: type.includes('date') ? state : state ? state : '', margin: "dense", variant: variant, id: id, size: "small", name: name, disabled: disabled, label: type.includes('date') ? undefined : label, type: type === 'number' ? 'text' : type, helperText: helperText, error: error, fullWidth: true, multiline: type === 'textarea' ? true : false, minRows: type === 'textarea' ? minRows : undefined, required: required, sx: sx, InputProps: __assign({ maxLength: "".concat(maxLength) }, InputProps), onChange: onChange, onBlur: handleBlur
                ? function (event) {
                    handleBlur(name, event.target.value);
                }
                : undefined })));
}
exports.default = TextInput;
