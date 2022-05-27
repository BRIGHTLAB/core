"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _RadioGroup = _interopRequireDefault(require("../RadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const data = [{
  value: 1,
  title: 'Amine Amine'
}, {
  value: 2,
  title: 'sharbel Mer3eb'
}, {
  value: 3,
  title: 'Charles daccache'
}, {
  value: 4,
  title: 'Serge Masaad'
}];
const stories = (0, _react2.storiesOf)('RadioGroup', module);
stories.add('RadioGroup', () => {
  return /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    handleChange: () => {},
    data: data,
    label: "Radio"
  });
});