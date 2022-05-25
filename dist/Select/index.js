"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Select(_ref) {
  let {
    id,
    value,
    handleChange,
    label,
    data,
    multi,
    disabled,
    error,
    helperText,
    required,
    name
  } = _ref;
  const [selectValue, setSelectValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setSelectValue(value);
  }, [value]);

  const onChange = (event, newValue) => {
    setSelectValue(newValue);
    handleChange(name, newValue);
  };

  return /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    value: selectValue,
    multiple: multi,
    fullWidth: true,
    options: data,
    getOptionLabel: option => option.title,
    isOptionEqualToValue: (option, val) => option.value == val.value,
    id: id,
    autoComplete: true,
    disabled: disabled,
    includeInputInList: true,
    renderInput: params => /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
      margin: "dense",
      label: label,
      required: required,
      helperText: helperText,
      error: error
    })),
    size: "small",
    onChange: onChange
  });
}

Select.propTypes = {
  data: _propTypes.default.array,
  multi: _propTypes.default.bool,
  name: _propTypes.default.string,
  id: _propTypes.default.any,
  value: _propTypes.default.string || _propTypes.default.array,
  name: _propTypes.default.string,
  helperText: _propTypes.default.string,
  error: _propTypes.default.bool,
  required: _propTypes.default.bool,
  handleChange: _propTypes.default.func.isRequired,
  handleBlur: _propTypes.default.func,
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
Select.defaultProps = {
  value: null
};