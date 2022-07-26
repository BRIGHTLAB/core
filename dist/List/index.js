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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles = {
    card: {
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        py: '20px',
    },
};
function ContainerList(_a) {
    var _b = _a.dataP, dataP = _b === void 0 ? [] : _b, renderItem = _a.renderItem, GridStyleItem = _a.GridStyleItem, _c = _a.totalP, totalP = _c === void 0 ? 10 : _c, loadMoreP = _a.loadMoreP, _d = _a.loadingP, loadingP = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? '' : _e, _f = _a.spacing, spacing = _f === void 0 ? 3 : _f;
    var _g = (0, react_1.useState)(dataP), data = _g[0], setData = _g[1];
    var _h = (0, react_1.useState)(totalP), total = _h[0], setTotal = _h[1];
    var _j = (0, react_1.useState)(loadingP), loading = _j[0], setLoading = _j[1];
    (0, react_1.useEffect)(function () {
        setData(dataP);
    }, [dataP]);
    (0, react_1.useEffect)(function () {
        setLoading(loadingP);
    }, [loadingP]);
    (0, react_1.useEffect)(function () {
        setTotal(totalP);
    }, [totalP]);
    return (React.createElement(material_1.Grid, { container: true, spacing: spacing },
        data.length > 0 ? (data.map(function (row, idx) { return (React.createElement(material_1.Grid, __assign({ item: true, xs: 12 }, GridStyleItem, { key: "".concat(id, "_").concat(row.id || 'rand_' + idx) }), renderItem(row, idx))); })) : (React.createElement(material_1.Grid, { item: true, xs: 12 },
            React.createElement(material_1.Card, { sx: styles.card }, loading ? React.createElement(material_1.CircularProgress, { size: 40 }) : 'NO DATA FOUND'))),
        React.createElement(material_1.Grid, { item: true, xs: 12, sx: { textAlign: 'center', mt: '10px' } }, data.length < total && loadMoreP ? (React.createElement(material_1.Button, { variant: "contained", color: "info", size: "small", onClick: loadMoreP },
            loading ? React.createElement(material_1.CircularProgress, { size: 22, sx: { color: 'white' } }) : 'Load More', " ".concat(data.length, "/").concat(total))) : null)));
}
exports.default = ContainerList;
