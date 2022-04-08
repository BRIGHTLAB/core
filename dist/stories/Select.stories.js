"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Select = _interopRequireDefault(require("../Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const data = [{
  value: 1,
  title: 'Amine Amine'
}, {
  value: 2,
  title: 'sharbel Mer3eb'
}, {
  value: 3,
  title: 'Charles daccache'
}, {
  value: 4,
  title: 'Serge Masaad'
}];
const stories = (0, _react2.storiesOf)('Select', module);
stories.add('Single', () => {
  return /*#__PURE__*/_react.default.createElement(_Select.default, {
    handleChange: () => {},
    data: data,
    label: "Single"
  });
});
stories.add('Multi', () => {
  return /*#__PURE__*/_react.default.createElement(_Select.default, {
    handleChange: () => {},
    data: data,
    label: "Multiline",
    multi: true
  });
});