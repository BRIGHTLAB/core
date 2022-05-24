"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _List = _interopRequireDefault(require("../List"));

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
const stories = (0, _react2.storiesOf)('List', module);
stories.add('Empty List', () => {
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    dataP: [],
    renderItem: (row, idx) => /*#__PURE__*/_react.default.createElement("div", null)
  });
});
stories.add('List', () => {
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    dataP: data,
    renderItem: (row, idx) => /*#__PURE__*/_react.default.createElement("div", null, row.title)
  });
});
stories.add('Loading List', () => {
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    dataP: [],
    loadingP: true,
    renderItem: (row, idx) => /*#__PURE__*/_react.default.createElement("div", null)
  });
});