"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("../Select"));

var _FileUpload = _interopRequireDefault(require("../FileUpload"));

var _TextField = _interopRequireDefault(require("../TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DynamicForm = props => {
  const [customFieldsData, setCustomFieldsData] = (0, _react.useState)([]);
  const [customFieldsErrorData, setCustomFieldsErrorData] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    setCustomFieldsData(props.defaultValues);
  }, [props.defaultValues]);

  const handleFieldChange = (key, value, id) => {
    // add the object inside the array
    const newObj = {
      id,
      products_fields_id: id,
      [key]: value,
      value,
      key
    };
    const newFieldsData = []; // loop through the array and check

    customFieldsData.forEach(item => {
      if (item.id != newObj.id) newFieldsData.push(item);
    }); // add it to the array

    newFieldsData.push(newObj);
    setCustomFieldsData(newFieldsData);
    if (props.onChange) props.onChange(newFieldsData);
  };

  const renderFields = (data, customComponents) => {
    if (!data) return null;
    if (data.length < 1) return null;
    return data.map((item, idx) => {
      // load each component
      let DynamicComponent;

      switch (item.type) {
        case "Select":
          DynamicComponent = props => /*#__PURE__*/_react.default.createElement(_Select.default, props);

          break;

        case "TextField":
          DynamicComponent = props => /*#__PURE__*/_react.default.createElement(_TextField.default, props);

          break;

        case "FileUpload":
          DynamicComponent = props => /*#__PURE__*/_react.default.createElement(_FileUpload.default, props);

          break;
        // if the component is different than the one we have, that means the user has defined

        default:
          DynamicComponent = props => {
            for (var index in customComponents) {
              const row = customComponents[index];
              if (row.type == item.type) return row.renderItem(props);
            }

            return null;
          };

          break;
      }

      return /*#__PURE__*/_react.default.createElement(_material.Grid, _extends({
        item: true
      }, item.grid), /*#__PURE__*/_react.default.createElement(DynamicComponent, _extends({
        key: idx
      }, item, {
        fullWidth: true,
        helperText: customFieldsErrorData[item.name] || item.helperText,
        error: item.name in customFieldsErrorData,
        value: customFieldsData[item.name] || null,
        handleChange: (key, value) => handleFieldChange(key, value, item.id)
      })));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, renderFields(props.fields, props.customComponents));
}; // type checking


DynamicForm.propTypes = {
  fields: _propTypes.default.array.isRequired,
  defaultValues: _propTypes.default.object,
  onChange: _propTypes.default.func,
  customComponents: _propTypes.default.array
};
DynamicForm.defaultProps = {
  defaultValues: [],
  customComponents: []
};
var _default = DynamicForm;
exports.default = _default;