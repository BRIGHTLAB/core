"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContainerList;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  card: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    py: '20px'
  }
};

function ContainerList(_ref) {
  let {
    dataP,
    renderItem,
    GridStyleItem,
    totalP,
    loadMoreP,
    loadingP,
    id,
    spacing
  } = _ref;
  const [data, setData] = (0, _react.useState)(dataP);
  const [total, setTotal] = (0, _react.useState)(totalP);
  const [loading, setLoading] = (0, _react.useState)(loadingP);
  (0, _react.useEffect)(() => {
    setData(dataP);
  }, [dataP]);
  (0, _react.useEffect)(() => {
    setLoading(loadingP);
  }, [loadingP]);
  (0, _react.useEffect)(() => {
    setTotal(totalP);
  }, [totalP]);
  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: spacing
  }, data.length > 0 ? data.map((row, idx) => /*#__PURE__*/_react.default.createElement(_material.Grid, _extends({
    item: true,
    xs: 12
  }, GridStyleItem, {
    key: "".concat(id, "_").concat(row.id || 'rand_' + idx)
  }), renderItem(row, idx))) : /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: styles.card
  }, loading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    size: 40
  }) : 'NO DATA FOUND')), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center',
      mt: '10px'
    }
  }, data.length < total && loadMoreP ? /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "info",
    size: "small",
    onClick: loadMoreP
  }, loading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    size: 22,
    sx: {
      color: 'white'
    }
  }) : 'Load More', " ".concat(data.length, "/").concat(total)) : null));
}

ContainerList.propTypes = {
  renderItem: _propTypes.default.func.isRequired,
  dataP: _propTypes.default.array.isRequired,
  GridStyleItem: _propTypes.default.object,
  totalP: _propTypes.default.number,
  loadMoreP: _propTypes.default.func,
  loadingP: _propTypes.default.bool,
  id: _propTypes.default.string,
  spacing: _propTypes.default.number
};
ContainerList.defaultProps = {
  dataP: [],
  renderItem: null,
  loadingP: false,
  totalP: 10,
  id: '',
  spacing: 3
};