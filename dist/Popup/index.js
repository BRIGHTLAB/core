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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@mui/material/Box"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
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
