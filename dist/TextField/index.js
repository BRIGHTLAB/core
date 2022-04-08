"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextInput;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const IsNumber = string => /^[0-9]+$/.test(string);

function TextInput(_ref) {
  let {
    id,
    value,
    name,
    type,
    helperText,
    error,
    required,
    handleChange,
    handleBlur,
    label,
    disabled,
    maxLength
  } = _ref;
  const [state, setState] = (0, _react.useState)(value);

  const onChange = event => {
    if (type === 'number' && event.target.value && !IsNumber(event.target.value)) {
      return;
    }

    setState(event.target.value);
    handleChange(name, event.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    value: state !== null && state !== void 0 ? state : '',
    margin: "dense",
    id: id,
    size: "small",
    name: name,
    disabled: disabled,
    label: label,
    type: type === 'number' ? 'text' : type,
    helperText: helperText,
    error: error,
    fullWidth: true,
    multiline: type === 'textarea' ? true : false,
    minRows: type === 'textarea' ? 4 : undefined,
    required: required,
    inputProps: {
      maxLength: maxLength !== null && maxLength !== void 0 ? maxLength : 255
    },
    onChange: onChange,
    onBlur: event => {
      handleBlur(name, event.target.value);
    }
  });
}