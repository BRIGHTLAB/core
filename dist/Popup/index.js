"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var material_1 = require("@mui/material");
var React = require("react");
var styles = {
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90%',
        bgcolor: 'background.paper',
        borderRadius: '5px',
        p: '20px',
        boxShadow: 24,
    },
};
function Popup(_a) {
    var open = _a.open, closeModal = _a.closeModal, children = _a.children, _b = _a.width, width = _b === void 0 ? '400px' : _b;
    return (React.createElement(material_1.Dialog, { keepMounted: true, open: open, onClose: closeModal },
        React.createElement(material_1.DialogContent, null,
            React.createElement(Box_1.default, { sx: __assign(__assign({}, styles.box), { width: "".concat(width) }) },
                React.createElement(Grid_1.default, { container: true }, children)))));
}
exports.default = Popup;
