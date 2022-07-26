"use strict";
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
    var id = _a.id, _b = _a.value, value = _b === void 0 ? '' : _b, name = _a.name, type = _a.type, helperText = _a.helperText, error = _a.error, required = _a.required, handleChange = _a.handleChange, handleBlur = _a.handleBlur, label = _a.label, disabled = _a.disabled, maxLength = _a.maxLength, min = _a.min, max = _a.max;
    var _c = (0, react_1.useState)(value), state = _c[0], setState = _c[1];
    (0, react_1.useEffect)(function () {
        setState(value);
    }, [value]);
    var onChange = function (event) {
        if (type === 'number' && event.target.value && !IsNumber(event.target.value)) {
            return;
        }
        setState(event.target.value);
        handleChange(name, event.target.value);
    };
    return (React.createElement(TextField_1.default, { value: state, margin: "dense", id: id, size: "small", name: name, disabled: disabled, label: label, type: type === 'number' ? 'text' : type, helperText: helperText, error: error, fullWidth: true, multiline: type === 'textarea' ? true : false, minRows: type === 'textarea' ? 4 : undefined, required: required, inputProps: { maxLength: "".concat(maxLength) }, onChange: onChange, onBlur: handleBlur
            ? function (event) {
                handleBlur(name, event.target.value);
            }
            : undefined }));
}
exports.default = TextInput;
