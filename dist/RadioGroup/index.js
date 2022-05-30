"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioGroupComp;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Radio = _interopRequireDefault(require("@mui/material/Radio"));

var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function RadioGroupComp(_ref) {
  let {
    value,
    handleChange,
    label,
    data,
    disabled,
    error,
    helperText,
    required,
    name
  } = _ref;
  const [selectValue, setSelectValue] = (0, _react.useState)(value !== null && value !== void 0 ? value : '');
  (0, _react.useEffect)(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = e => {
    setSelectValue(e.target.value);
    handleChange(name, e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    disabled: disabled,
    required: required,
    component: "fieldset"
  }, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    component: "legend",
    error: error
  }, label), /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    row: true,
    "aria-label": "gender",
    name: name,
    value: selectValue,
    onChange: onChange
  }, data === null || data === void 0 ? void 0 : data.map((row, idx) => /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, _extends({
    key: name + '_' + idx,
    value: row.value,
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: row.title
  }, row.extra)))), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "p",
    color: error ? 'error' : 'inherit'
  }, helperText));
}

RadioGroupComp.propTypes = {
  data: _propTypes.default.array,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  name: _propTypes.default.string,
  helperText: _propTypes.default.string,
  error: _propTypes.default.bool,
  required: _propTypes.default.bool,
  handleChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
RadioGroupComp.defaultProps = {
  value: ''
};