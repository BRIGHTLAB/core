"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FileUpload = _interopRequireDefault(require("../FileUpload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stories = (0, _react2.storiesOf)('File Upload', module);
stories.add('Image', () => {
  return /*#__PURE__*/_react.default.createElement(_FileUpload.default, {
    handleChange: () => {}
  });
});
stories.add('video', () => {
  return /*#__PURE__*/_react.default.createElement(_FileUpload.default, {
    handleChange: () => {},
    type: "video"
  });
});
stories.add('audio', () => {
  return /*#__PURE__*/_react.default.createElement(_FileUpload.default, {
    handleChange: () => {},
    type: "audio"
  });
});
stories.add('Allow URL', () => {
  return /*#__PURE__*/_react.default.createElement(_FileUpload.default, {
    handleChange: () => {},
    type: "video",
    allowURL: true
  });
});