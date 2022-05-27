"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioGroup;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function RadioGroup(_ref) {
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

  return (
    /*#__PURE__*/
    // <FormControl disabled={disabled} required={required} component="fieldset">
    //   <FormLabel component="legend" error={error}>
    //     {label}
    //   </FormLabel>
    //   <RadioGroup
    //     row
    //     aria-label="gender"
    //     name={name}
    //     value={selectValue}
    //     onChange={onChange}
    //   >
    //     {data?.map((row, idx) => (
    //       <FormControlLabel
    //         key={name + '_' + idx}
    //         value={row.value}
    //         control={<Radio />}
    //         label={row.title}
    //         {...row.extra}
    //       />
    //     ))}
    //   </RadioGroup>
    //   <Typography variant="p" color={error ? 'error' : 'inherit'}>
    //     {helperText}
    //   </Typography>
    // </FormControl>
    _react.default.createElement(_material.FormControl, null, /*#__PURE__*/_react.default.createElement(_material.FormLabel, {
      id: "demo-radio-buttons-group-label"
    }, "Gender"), /*#__PURE__*/_react.default.createElement(RadioGroup, {
      "aria-labelledby": "demo-radio-buttons-group-label",
      defaultValue: "female",
      name: "radio-buttons-group"
    }, /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
      value: "female",
      control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
      label: "Female"
    }), /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
      value: "male",
      control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
      label: "Male"
    }), /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
      value: "other",
      control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
      label: "Other"
    })))
  );
}

RadioGroup.propTypes = {
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
RadioGroup.defaultProps = {
  value: ''
};