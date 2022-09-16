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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
// loading the default components
var Select_1 = __importDefault(require("../Select"));
var FileUpload_1 = __importDefault(require("../FileUpload"));
var TextField_1 = __importDefault(require("../TextField"));
var RadioGroup_1 = __importDefault(require("../RadioGroup"));
var CheckBox_1 = __importDefault(require("../CheckBox"));
var PlusBotton_1 = __importDefault(require("./PlusBotton"));
var components = {
    TextField: TextField_1.default,
    FileUpload: FileUpload_1.default,
    Select: Select_1.default,
    RadioGroup: RadioGroup_1.default,
    CheckBox: CheckBox_1.default,
};
function Form(_a) {
    var _b = _a.defaultValues, defaultValues = _b === void 0 ? {} : _b, _c = _a.errorValues, errorValues = _c === void 0 ? {} : _c, onChange = _a.onChange, fields = _a.fields, _d = _a.customComponents, customComponents = _d === void 0 ? [] : _d;
    var _e = (0, react_1.useState)({}), customFieldsData = _e[0], setCustomFieldsData = _e[1];
    var _f = (0, react_1.useState)({}), customFieldsErrorData = _f[0], setCustomFieldsErrorData = _f[1];
    var _g = (0, react_1.useState)({}), tempParentObject = _g[0], setTempParentObject = _g[1];
    (0, react_1.useEffect)(function () {
        if (Object.keys(defaultValues).length > 0) {
            setCustomFieldsData(defaultValues);
        }
    }, [defaultValues]);
    (0, react_1.useEffect)(function () {
        if (errorValues && Object.keys(errorValues).length > 0) {
            setCustomFieldsErrorData(errorValues);
        }
    }, [errorValues]);
    var handleFieldChange = function (key, value, parentName, parentIdx) {
        var _a, _b, _c, _d;
        var _e;
        // if parentName exists means array and childs
        var tempFieldsData = {};
        if (parentName) {
            var tempArray = __spreadArray([], ((_e = customFieldsData[parentName]) !== null && _e !== void 0 ? _e : []), true);
            if (tempArray.length > 0 && (parentIdx || parentIdx == 0)) {
                tempArray[parentIdx] = __assign(__assign({}, tempArray[parentIdx]), (_a = {}, _a[key] = value, _a));
            }
            else {
                tempArray.push((_b = {}, _b[key] = value, _b));
            }
            tempFieldsData = __assign(__assign({}, customFieldsData), (_c = {}, _c[parentName] = tempArray, _c));
        }
        else {
            tempFieldsData = __assign(__assign({}, customFieldsData), (_d = {}, _d[key] = value, _d));
        }
        setCustomFieldsData(tempFieldsData);
        if (onChange)
            onChange(tempFieldsData);
    };
    var renderFields = function (data, customComponents, parentName, parentIdx) {
        if (!data || data.length < 1)
            return null;
        return data.map(function (item, idx) {
            var _a, _b;
            // load each component
            var DynamicComponent;
            if (item.type == 'Array') {
                //Recursive function
            }
            else if (components[item.type]) {
                DynamicComponent = components[item.type];
            }
            else {
                DynamicComponent = function () {
                    for (var index in customComponents) {
                        var row = customComponents[index];
                        if (row.type == item.type)
                            return row.renderItem({ defaultValues: defaultValues, errorValues: errorValues, onChange: onChange, fields: fields, customComponents: customComponents });
                    }
                    return null;
                };
            }
            return (React.createElement(material_1.Grid, __assign({ item: true }, item.grid, { key: 'Dynamic_Form_' + idx }), DynamicComponent ? (React.createElement(DynamicComponent, __assign({}, item, { type: (_a = item.inputType) !== null && _a !== void 0 ? _a : undefined, multi: (_b = item.multi) !== null && _b !== void 0 ? _b : undefined, fullWidth: true, helperText: customFieldsErrorData[item.name] || item.helperText || undefined, error: item.name in customFieldsErrorData, value: customFieldsData[item.name] || null, handleChange: function (name, value) { return handleFieldChange(name, value, parentName, parentIdx); } }))) : (React.createElement(material_1.Grid, { container: true, spacing: 2 },
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.Typography, { component: "h1", variant: "h5" },
                        item.label,
                        ' ',
                        React.createElement(PlusBotton_1.default, { disabled: customFieldsData[item.name] && customFieldsData[item.name][0]
                                ? false
                                : true, onClick: customFieldsData[item.name] && customFieldsData[item.name][0]
                                ? function () {
                                    return setTempParentObject(function (oldTemp) {
                                        var _a;
                                        var _b;
                                        return (__assign(__assign({}, oldTemp), (_a = {}, _a[item.name] = ((_b = oldTemp[item.name]) !== null && _b !== void 0 ? _b : 0) + 1, _a)));
                                    });
                                }
                                : undefined }))),
                renderFields(item.data, [], item.name, 0),
                renderArray(item.name, item)))));
        });
    };
    var renderArray = function (parentName, item) {
        var HTML = [];
        for (var i = 1; i <= tempParentObject[parentName]; i++) {
            HTML.push(React.createElement(material_1.Grid, { item: true, xs: 12, key: 'parentName_' + parentName + '_' + i },
                React.createElement("hr", null),
                renderFields(item.data, [], item.name, i)));
        }
        return HTML;
    };
    return (React.createElement(material_1.Grid, { container: true, spacing: 2 }, renderFields(fields, customComponents)));
}
exports.default = Form;
