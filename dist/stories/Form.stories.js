"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Form = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stories = (0, _react2.storiesOf)('Form', module);
const fields = [{
  id: 'full_name',
  name: 'full_name',
  type: 'TextField',
  label: 'Full Name',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'email',
  name: 'email',
  type: 'TextField',
  label: 'Email',
  inputType: 'email',
  helperText: 'Please enter a valid email',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'image_url',
  name: 'image_url',
  type: 'FileUpload',
  label: 'Image',
  inputType: 'image',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'deactivated',
  name: 'deactivated',
  type: 'RadioGroup',
  label: 'Active',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}];
stories.add('Init', () => {
  return /*#__PURE__*/_react.default.createElement(_Form.default, {
    fields: fields,
    handleChange: values => console.log('changed', values),
    customComponents: [{
      type: 'custom',
      renderItem: item => /*#__PURE__*/_react.default.createElement("p", null, item.title)
    }]
  });
});