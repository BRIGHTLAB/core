"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var RadioGroup_1 = require("../RadioGroup");
var data = [
    { value: 1, title: 'Amine Amine' },
    { value: 2, title: 'sharbel Mer3eb' },
    { value: 3, title: 'Charles daccache' },
    { value: 4, title: 'Serge Masaad' },
];
var stories = (0, react_2.storiesOf)('RadioGroup', module);
stories.add('RadioGroup', function () {
    return (react_1.default.createElement(RadioGroup_1.default, { handleChange: function () { }, data: data, required: true, error: true, name: "abc", helperText: "hello there click on a radio", label: "Radio" }));
});
