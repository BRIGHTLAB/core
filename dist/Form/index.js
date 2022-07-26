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
var material_1 = require("@mui/material");
// loading the default components
var Select_1 = require("../Select");
var FileUpload_1 = require("../FileUpload");
var TextField_1 = require("../TextField");
var RadioGroup_1 = require("../RadioGroup");
var CheckBox_1 = require("../CheckBox");
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
    (0, react_1.useEffect)(function () {
        setCustomFieldsData(defaultValues);
    }, [defaultValues]);
    (0, react_1.useEffect)(function () {
        setCustomFieldsErrorData(errorValues);
    }, [errorValues]);
    var handleFieldChange = function (key, value, id) {
        var _a;
        var tempFieldsData = __assign(__assign({}, customFieldsData), (_a = {}, _a[key] = value, _a));
        setCustomFieldsData(tempFieldsData);
        if (onChange)
            onChange(tempFieldsData);
    };
    var renderFields = function (data, customComponents) {
        if (!data || data.length < 1)
            return null;
        return data.map(function (item, idx) {
            var _a, _b;
            // load each component
            var DynamicComponent;
            if (components[item.type]) {
                DynamicComponent = components[item.type];
            }
            else {
                DynamicComponent = function (_a) {
                    var _b = _a.defaultValues, defaultValues = _b === void 0 ? {} : _b, _c = _a.errorValues, errorValues = _c === void 0 ? {} : _c, onChange = _a.onChange, fields = _a.fields, _d = _a.customComponents, customComponents = _d === void 0 ? [] : _d;
                    for (var index in customComponents) {
                        var row = customComponents[index];
                        if (row.type == item.type)
                            return row.renderItem({ defaultValues: defaultValues, errorValues: errorValues, onChange: onChange, fields: fields, customComponents: customComponents });
                    }
                    return null;
                };
            }
            return (React.createElement(material_1.Grid, __assign({ item: true }, item.grid, { key: 'Dynamic_Form_' + idx }),
                React.createElement(DynamicComponent, __assign({}, item, { type: (_a = item.inputType) !== null && _a !== void 0 ? _a : undefined, multi: (_b = item.multi) !== null && _b !== void 0 ? _b : undefined, fullWidth: true, helperText: customFieldsErrorData[item.name] || item.helperText || undefined, error: item.name in customFieldsErrorData, value: customFieldsData[item.name] || null, handleChange: function (name, value) { return handleFieldChange(name, value, item.id); } }))));
        });
    };
    return (React.createElement(material_1.Grid, { container: true, spacing: 2 }, renderFields(fields, customComponents)));
}
exports.default = Form;
