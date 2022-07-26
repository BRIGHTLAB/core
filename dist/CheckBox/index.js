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
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
function CheckBoxComp(_a) {
    var _b = _a.value, value = _b === void 0 ? {} : _b, handleChange = _a.handleChange, label = _a.label, data = _a.data, disabled = _a.disabled, error = _a.error, helperText = _a.helperText, required = _a.required, name = _a.name, _c = _a.view, view = _c === void 0 ? 'flex' : _c;
    var _d = (0, react_1.useState)(value), selectValue = _d[0], setSelectValue = _d[1];
    (0, react_1.useEffect)(function () {
        setSelectValue(value);
    }, [value]);
    var onChange = function (e) {
        var _a, _b;
        setSelectValue(__assign(__assign({}, selectValue), (_a = {}, _a[e.target.name] = e.target.checked, _a)));
        handleChange(name, __assign(__assign({}, selectValue), (_b = {}, _b[e.target.name] = e.target.checked, _b)));
    };
    return (React.createElement(FormControl_1.default, { disabled: disabled, required: required, component: "fieldset" },
        React.createElement(FormLabel_1.default, { component: "legend", error: error }, label),
        React.createElement("div", { style: { display: view } }, data === null || data === void 0 ? void 0 : data.map(function (row, idx) { return (React.createElement(FormControlLabel_1.default, __assign({ key: name + '_' + idx, control: React.createElement(Checkbox_1.default, { checked: selectValue ? (selectValue[row.value] ? true : false) : false, name: JSON.stringify(row.value), onChange: onChange }), label: row.title }, row.attr))); })),
        React.createElement(Typography_1.default, { component: "p", color: error ? 'error' : 'inherit' }, helperText)));
}
exports.default = CheckBoxComp;
