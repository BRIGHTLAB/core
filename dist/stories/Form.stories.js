"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Form = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stories = (0, _react2.storiesOf)('Form', module);
let fields = [{
  id: "123",
  name: "country",
  type: 'Select',
  label: "Country",
  helperText: "Country of origin",
  grid: {
    xs: 12,
    md: 6
  },
  data: [{
    title: "Male",
    value: "male"
  }, {
    title: "Female",
    value: "female"
  }, {
    title: "Hetero",
    value: "Hetero"
  }]
}, {
  id: "asdasd",
  name: "phone",
  label: "Phone",
  type: 'TextField',
  placeholder: "Phone Number",
  helperText: "Emergency phone number",
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  type: 'custom',
  title: 'charles',
  grid: {
    xs: 12,
    md: 6
  }
}];
stories.add('Init', () => {
  return /*#__PURE__*/_react.default.createElement(_Form.default, {
    fields: fields,
    handleChange: values => console.log("changed", values),
    customComponents: [{
      type: "custom",
      renderItem: item => /*#__PURE__*/_react.default.createElement("p", null, item.title)
    }]
  });
});