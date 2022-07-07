"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var CheckBox_1 = require("../CheckBox");
var data = [
    { value: 1, title: 'Amine Amine' },
    { value: 2, title: 'sharbel Mer3eb' },
    { value: 3, title: 'Charles daccache' },
    { value: 4, title: 'Serge Masaad' },
];
var stories = (0, react_2.storiesOf)('CheckBox', module);
stories.add('CheckBox', function () {
    var _a;
    return (react_1.default.createElement(CheckBox_1.default, { value: (_a = {}, _a['1'] = true, _a), handleChange: function (name, value) { }, data: data, required: true, error: true, name: "checkbox1", helperText: "hello there click on a checkbox or more", label: "Checkboxes" }));
});
stories.add('checkbox grid', function () {
    return (react_1.default.createElement(CheckBox_1.default, { handleChange: function (name, value) { }, data: data, required: true, error: true, name: "checkbox2", helperText: "hello there click on a checkbox or more", label: "Checkboxes", view: "grid" }));
});
