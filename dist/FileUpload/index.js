"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FileUpload;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@uppy/react");

var _core = _interopRequireDefault(require("@uppy/core"));

var _awsS = _interopRequireDefault(require("@uppy/aws-s3"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FileUpload(_ref) {
  let {
    value,
    name,
    handleChange,
    type,
    grid,
    id,
    error,
    title,
    required,
    allowURL,
    disabled,
    lang,
    Get
  } = _ref;
  const [URL, setURL] = (0, _react.useState)('false');
  const [state, setState] = (0, _react.useState)(value);
  let fileTypes = [];

  switch (type) {
    case 'image':
      fileTypes = ['.jpg', '.jpeg', '.png'];
      break;

    case 'video':
      fileTypes = ['.mp4'];
      break;

    case 'audio':
      fileTypes = ['.m4a', '.flac', '.mp3', '.wav', '.wma', '.acc'];
      break;

    default:
      fileTypes = ['.jpg', '.jpeg', '.png'];
  }

  const uppy = (0, _react2.useUppy)(() => {
    return new _core.default({
      id: name,
      autoProceed: true,
      restrictions: {
        maxFileSize: type === 'image' ? 500000 : undefined,
        //500kb
        maxNumberOfFiles: 1,
        allowedFileTypes: fileTypes
      }
    }).use(_awsS.default, {
      fields: [],

      // empty array
      async getUploadParameters(file) {
        const response = await Get("sign_url?objectName=".concat(file.name), lang);
        return {
          method: 'PUT',
          url: response.signedUrl,
          fields: []
        };
      }

    }).on('complete', result => {
      if (result.successful.length > 0) {
        // add the file to the main postData array
        const obj = result.successful[0];
        const filename = obj.uploadURL.split('/').pop();
        onChange(filename);
      } else {
        console.log('Upload error: ', result.failed); // if upload failed, let's see what went wrong
      }
    }).on('file-removed', () => {
      onChange('');
    });
  });

  const changeUploadType = e => {
    onChange('');
    setURL(e.target.value);
  };

  const onChange = value => setState(value);

  (0, _react.useEffect)(() => {
    setState(value);
  }, [value]);
  (0, _react.useEffect)(() => {
    handleChange({
      target: {
        name: name,
        value: state
      }
    });
  }, [state, name]);
  return /*#__PURE__*/_react.default.createElement(_material.Grid, _extends({}, grid, {
    key: id
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: error ? '#ff1744' : 'gray'
    }
  }, title, " ", required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "required"
  }, "*") : ''), value && value.includes('https://') ? /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Tooltip, {
    title: "Delete"
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Delete, {
    style: {
      color: '#f23729'
    },
    className: "pointer",
    onClick: () => {
      onChange('');
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 11,
    style: {
      paddingTop: '2px'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: value,
    target: "_blank"
  }, value))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, allowURL && /*#__PURE__*/_react.default.createElement(_material.RadioGroup, {
    row: true,
    "aria-label": "Upload type",
    name: "URL",
    value: URL,
    onChange: changeUploadType
  }, /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    value: "false",
    control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
    label: "File Upload"
  }), /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    value: "true",
    control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
    label: "Url"
  })), URL === 'true' ? /*#__PURE__*/_react.default.createElement(_material.TextField, {
    size: "small",
    value: value !== null && value !== void 0 ? value : '',
    id: id,
    name: name,
    disabled: disabled,
    type: "text",
    error: error,
    fullWidth: true,
    required: required,
    inputProps: {
      maxLength: 255
    },
    label: "Url",
    onChange: handleChange
  }) : /*#__PURE__*/_react.default.createElement(_react2.Dashboard, {
    uppy: uppy,
    showRemoveButtonAfterComplete: true,
    hideProgressAfterFinish: true,
    height: 400,
    width: "100%"
  })));
}

FileUpload.propTypes = {
  value: _propTypes.default.string,
  name: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  type: _propTypes.default.string,
  grid: _propTypes.default.object,
  id: _propTypes.default.any,
  error: _propTypes.default.bool,
  title: _propTypes.default.string,
  required: _propTypes.default.bool,
  allowURL: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  lang: _propTypes.default.string,
  Get: _propTypes.default.func
};
FileUpload.defaultProps = {
  lang: 'en'
};