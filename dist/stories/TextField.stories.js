"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _TextField = _interopRequireDefault(require("../TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stories = (0, _react2.storiesOf)('Text Field', module);
stories.add('Text', () => {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    handleChange: () => {},
    label: "Text"
  });
});
stories.add('Text Area', () => {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    handleChange: () => {},
    label: "Text Area",
    type: "textarea"
  });
});
stories.add('Number', () => {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    handleChange: () => {},
    label: "Text Area",
    type: "number"
  });
});
stories.add('Text + Max Length', () => {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    handleChange: () => {},
    label: "Text",
    maxLength: 20
  });
});